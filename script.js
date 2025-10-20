document.addEventListener('DOMContentLoaded', () => {
  const STAGES = ['1ST', '2ND', '3RD', 'LAST'];
  let currentStage = '1ST';
  let zCounter = 1;
  let scale = 1; // global zoom scale for all boards
  let selectedPiece = null;

  const paletteListEl = document.getElementById('paletteList');
  const paletteHintEl = document.getElementById('paletteHint');
  const zoomInput = document.getElementById('zoomRange');
  const zoomLabel = document.getElementById('zoomLabel');
  const ANSWER_SHEET_SCALE = 1.5;
  const PIECE_BASE_SCALE = 0.5; // すべての画像を現在の0.7倍に

  const boards = new Map(
    STAGES.map(s => {
      const outer = document.querySelector(`.stage-board[data-stage="${s}"]`);
      const inner = outer.querySelector('.board-inner');
      return [s, { outer, inner }];
    }),
  );

  function clearSelection() {
    if (selectedPiece) selectedPiece.classList.remove('selected');
    selectedPiece = null;
  }

  // Tab switching
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const stage = btn.getAttribute('data-stage');
      if (stage === currentStage) return;
      document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b === btn));
      boards.get(currentStage).outer.classList.remove('active');
      currentStage = stage;
      boards.get(currentStage).outer.classList.add('active');
      clearSelection();
      renderPalette();
    });
  });

  // Background click to deselect
  for (const { outer } of boards.values()) {
    outer.addEventListener('pointerdown', (e) => {
      if (e.target.classList.contains('piece') || e.target.closest('.piece')) return;
      clearSelection();
    });
  }

  // Zoom control
  function applyScale() {
    for (const { inner } of boards.values()) {
      inner.style.transform = `scale(${scale})`;
    }
    zoomLabel.textContent = Math.round(scale * 100) + '%';
  }
  zoomInput.addEventListener('input', () => {
    const v = Number(zoomInput.value || '100');
    scale = Math.max(0.1, v / 100);
    applyScale();
  });
  applyScale();

  // Load asset manifest
  let assets = [];
  let assetsByStage = new Map();

  function normalizePath(p) {
    return (p || '').replace(/\\\\/g, '/');
  }

  function guessStageFromName(name) {
    const n = (name || '').toLowerCase();
    if (/^(1|1st)/.test(n)) return '1ST';
    if (/^(2|2nd)/.test(n)) return '2ND';
    if (/^(3|3rd)/.test(n)) return '3RD';
    if (/^(4|4th|last|final)/.test(n)) return 'LAST';
    return null;
  }

  function shouldExclude(nameOrPath) {
    const n = (nameOrPath || '').toLowerCase();
    const normalized = n.replace(/[\s_-]+/g, ''); // collapse spaces/underscores/hyphens
    if (normalized.includes('allitem')) return true;
    // exclude standalone 'all' like "1st all.png"
    if (/(^|[^a-z])all([^a-z]|$)/.test(n)) return true;
    return false;
  }

  function groupAssets() {
    assetsByStage = new Map(STAGES.map(s => [s, []]));
    for (const a of assets) {
      if (shouldExclude(a.name || a.path)) continue;
      const stage = guessStageFromName(a.name) || '1ST';
      if (assetsByStage.has(stage)) assetsByStage.get(stage).push(a);
    }
  }

  function renderPalette() {
    const list = assetsByStage.get(currentStage) || [];
    paletteListEl.innerHTML = '';
    if (!list.length) {
      paletteHintEl.textContent = 'このステージの素材がありません。image フォルダに追加してください。';
      return;
    }
    paletteHintEl.textContent = '素材をクリックすると、右のステージに追加されます。';
    for (const item of list) {
      const card = document.createElement('button');
      card.className = 'asset';
      card.title = item.name;
      card.type = 'button';
      const img = document.createElement('img');
      img.alt = item.name;
      const src = encodeURI(normalizePath(item.path));
      img.src = src;
      card.appendChild(img);
      card.addEventListener('click', () => {
        addPieceToStage(src);
      });
      paletteListEl.appendChild(card);
    }
  }

  function addPieceToStage(src) {
    const { inner } = boards.get(currentStage);
    const wrapper = document.createElement('div');
    wrapper.className = 'piece';
    wrapper.setAttribute('draggable', 'false');
    wrapper.style.left = Math.floor(16 + Math.random() * 40) + 'px';
    wrapper.style.top = Math.floor(16 + Math.random() * 40) + 'px';
    wrapper.style.zIndex = String(++zCounter);

    const img = document.createElement('img');
    img.className = 'piece-img';
    img.src = src;
    img.alt = '';
    img.setAttribute('draggable', 'false');

    // Fix wrapper width explicitly to avoid shrink-to-fit when moving beyond container
    // Also scale AnswerSheet images to 1.73x by widening the wrapper
    const applySize = () => {
      const scaleFactor = (/answersheet/i.test(img.src) ? ANSWER_SHEET_SCALE : 1) * PIECE_BASE_SCALE;
      if (img.naturalWidth) {
        const w = Math.round(img.naturalWidth * scaleFactor);
        wrapper.style.width = w + 'px';
        // Height will follow from image aspect via height:auto
        img.style.width = '100%';
        img.style.height = 'auto';
      }
    };
    if (img.complete) {
      // If cached, natural sizes are ready
      applySize();
    } else {
      img.addEventListener('load', applySize, { once: true });
    }

    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'piece-delete';
    del.title = '削除';
    del.textContent = '×';
    del.addEventListener('click', (e) => {
      e.stopPropagation();
      if (wrapper.parentElement) wrapper.parentElement.removeChild(wrapper);
      if (selectedPiece === wrapper) selectedPiece = null;
    });

    wrapper.appendChild(img);
    wrapper.appendChild(del);

    enableDrag(wrapper, inner);
    inner.appendChild(wrapper);
  }

  function enableDrag(el, container) {
    let startX = 0, startY = 0;
    let startLeft = 0, startTop = 0;
    let dragging = false;

    const onPointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target && (e.target.classList.contains('piece-delete'))) return; // don't drag from delete button
      dragging = true;
      selectPiece(el);
      el.classList.add('dragging');
      el.style.zIndex = String(++zCounter);
      startX = e.clientX;
      startY = e.clientY;
      startLeft = parseFloat(el.style.left || '0');
      startTop = parseFloat(el.style.top || '0');
      el.setPointerCapture?.(e.pointerId);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp, { once: true });
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!dragging) return;
      const dx = (e.clientX - startX) / scale;
      const dy = (e.clientY - startY) / scale;
      const nextLeft = startLeft + dx;
      const nextTop = startTop + dy;
      // Free movement: no clamping to container
      el.style.left = nextLeft + 'px';
      el.style.top = nextTop + 'px';
    };

    const onPointerUp = (e) => {
      dragging = false;
      el.classList.remove('dragging');
      el.releasePointerCapture?.(e.pointerId);
      window.removeEventListener('pointermove', onPointerMove);
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('dragstart', (e) => e.preventDefault());
    // Click to select on non-drag
    el.addEventListener('click', () => selectPiece(el));
  }

  function selectPiece(el) {
    if (selectedPiece === el) return;
    if (selectedPiece) selectedPiece.classList.remove('selected');
    selectedPiece = el;
    selectedPiece.classList.add('selected');
  }

  // Keyboard delete
  document.addEventListener('keydown', (e) => {
    if (!selectedPiece) return;
    if (e.key === 'Delete' || e.key === 'Backspace') {
      selectedPiece.parentElement?.removeChild(selectedPiece);
      selectedPiece = null;
      e.preventDefault();
    }
  });

  // Kickoff: load manifest (fallbacks: window.ASSETS or fetch JSON)
  const preload = Array.isArray(window.ASSETS) ? window.ASSETS : null;
  const load = preload ? Promise.resolve(preload) : fetch('image/assets.json', { cache: 'no-store' })
    .then(r => r.ok ? r.json() : [])
    .catch(() => []);

  load.then((list) => {
    if (!Array.isArray(list)) list = [];
    assets = list.map(x => ({ name: x.name || '', path: x.path || '' }));
    groupAssets();
    renderPalette();
  });
});
