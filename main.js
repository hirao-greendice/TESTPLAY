// Stepwise story flow for the puzzle site

const STEPS = [
  {
    key: "step1",
    answer: "すたーと",
    storyTitle: "プロローグ / STORY1",
    story: [
      "あなたは、謎制作会社のチーフクリエイター。社内で作られたさまざまな謎解きをテストプレイ、謎解きに問題がないかチェックをして、販売の可否を決めるのが主な仕事だ。",
      "今日テストプレイをする謎解きは、持ち帰り謎解き『スクエア』。入社数年の社員が制作した力作らしい。",
      "あなたは、どんなものが遊べるのかワクワクしながら、会議室で待っていた。",
      "これが、ドタバタでトラブル続きなテストプレイになるとは知らずに・・・",
      "",
      "STORY１",
      "あなた「集合時間過ぎてるな、あいつ遅刻か？・・・あれ、チャットが来てる」",
      "『チーフお疲れ様です。\n　すみません、今日体調を崩してしまってテストプレイに立ち会えません🙇‍♀️\n　キットの準備は新入社員に任せたので、彼から受け取ってください！\n　ヒントはないですが、ゲームサイトはできているので問題なく遊べます！\n　それでは、感想お待ちしてます。』",
      "あなた「制作者が立ち会ってこそのテストプレイなのに、現場にいないのは前代未聞だけど、まあ今回は販売まで時間もないし仕方ないか」",
      "しばらくすると、会議室の扉が開いた。",
      "新入社員「お疲れ様です！キットをお持ちしました！」",
      "あ「おぉ、お疲れ。ちゃんと準備できたか？」",
      "新「はい！先輩の指示通り、謎データを印刷して紙も４等分に裁断しました！」",
      "あ「オッケー、じゃあ早速遊ばせてもらうよ」",
    ],
    instructionLabel: "1stステップ",
    instructionLines: [
      "１の封筒の中にある1stステップのキットを取り出そう。",
      "謎を解き明かして、webサイトに入力する1stステップの答えを送信しよう。",
      "＜　ひらがなで入力　＞",
    ],
    placeholder: "こたえを入力",
  },
  {
    key: "step2",
    answer: "とりがー",
    storyTitle: "STORY2",
    story: [
      "あ「1stステップはこんなもんか。よし、次のステップのキットをくれ」",
      "新「わかりました！準備するのでお待ちください！」",
      "あ（1stステップを解いている間に準備しとけよ〜。まあ新入社員だし多めに見るか）",
      "新「わぁぁぁあああ！」",
      "あ「？！だ、大丈夫か？」",
      "新「大丈夫です！チーフはそこにいてください！」",
      "数分後、新入社員が次のキットを持ってきました。",
      "新「お待せしました！こちらが次のキット……なんですが……」",
      "あ「ん？どうした？」",
      "新「実は、プリンターの青色のインクがなくなっているのに気づかず印刷してしまったんです……。チーフには申し訳ないんですが、青色のインクがなくなってしまった謎が元はどんな謎だったのかを想像して解いてくれませんか……？チーフの謎解き力ならきっと大丈夫です！」",
      "あ「ま、まぁ時間もないしやるしかないか……」",
    ],
    instructionLabel: "2ndステップ",
    instructionLines: [
      "２の封筒の中にある2ndステップのキットを取り出そう。",
      "謎を解き明かして、webサイトに入力する2ndステップの答えを送信しよう。",
      "＜　ひらがなで入力　＞",
    ],
    placeholder: "こたえを入力",
  },
  {
    key: "step3",
    answer: "かみひとえ",
    storyTitle: "STORY3",
    story: [
      "あ「2ndステップはなんとか解けたな。よし、次のステップのキットをくれ」",
      "新「わかりました！準備するのでお待ちください！」",
      "あ（いやだから、解いている間に準備しとけよ〜。時間がないっていうのに……）",
      "新「わぁぁぁあああ！」",
      "あ「また？！大丈夫か？」",
      "新「大丈夫です！チーフはそこにいてください！」",
      "数分後、新入社員が次のキットを持ってきました。",
      "新「お待せしました！こちらが次のキット……なんですが……」",
      "あ「今度はなんだ……」",
      "新「青色のインクの補充はしたんですが、誤って白黒印刷をしてしまいました……。\nチーフには申し訳ないんですが、モノクロ状態になってしまった謎が元はどんな謎だったのかを想像して解いてくれませんか……？チーフの謎解き力ならきっと大丈夫です！」",
      "あ「ま、まぁしかたないか……次は印刷ミスするなよ」",
    ],
    instructionLabel: "3rdステップ",
    instructionLines: [
      "３の封筒の中にある3rdステップのキットを取り出そう。",
      "謎を解き明かして、webサイトに入力する3rdステップの答えを送信しよう。",
      "＜　ひらがなで入力　＞",
    ],
    placeholder: "こたえを入力",
  },
  {
    key: "last",
    answer: "やりがい",
    storyTitle: "STORY LAST",
    story: [
      "あ「3rdステップもなんとか解けたな。よし、次のステップのキットをくれ」",
      "新「はい！最後のステップは準備済みです！」",
      "あ（お、最後は準備しているのか）",
      "新「LASTステップはこの紙1枚だけです！印刷は正しくできたし、裁断は不要だったので印刷したままの状態で渡しますね」",
      "あ「了解〜」",
    ],
    instructionLabel: "LASTステップ",
    instructionLines: [
      "LASTの封筒の中にあるlastステップのキットを取り出そう。",
      "謎を解き明かして、webサイトに入力するlastステップの答えを送信しよう。",
      "＜　ひらがなで入力　＞",
    ],
    placeholder: "こたえを入力",
  },
  {
    key: "epilogue",
    answer: "えくすてんど",
    storyTitle: "エピローグ",
    story: [
      "あ「これ、裁断のやり方間違えてないか？\n　　本来は、対角線に沿って４等分にするのが正しい気がするが」",
      "新「え……わ！本当だ。すみません！僕のミスです……ちゃんと解けましたか……？」",
      "あ「まあ、偶然にも謎が成立してたからいいものの、こんなミスありえないぞ？段取りも悪いし、先輩から言われたことをそのまま出来ないと……」",
      "新「……ふふふ」",
      "あ「おい、何がおかしい」",
      "新「あははは！もう我慢できないです笑　先輩、出てきてください」",
      "新入社員の呼びかけに合わせて、会議室のドアが開いた",
      "先輩「お疲れ様です、チーフ。すみません！これ全部ドッキリでした」",
      "あ「あれ？お前、体調崩したって……というかドッキリってどういうことだよ」",
      "先「今回の謎解きは、謎解きキットが印刷ミスや裁断ミスされている中なんとかして答えを解き明かすというコンセプトだったんですよ。\nなので、このコンセプトをはじめに話してしまうとネタバレになってしまうので、今回のテストプレイではこのような方式をとらせていただきました。騙すような形になってしまいすみません！」",
      "あ「なるほどな。……あ〜。だから新人くんは次の準備をせずにずっと私の近くにいたんだな。私がどのように謎を解くのか、君に代わってチェックするために」",
      "新「そういうことです！段取りが悪く見えてしまったら申し訳ないです！」",
      "あ「いやいや、いい演技だったよ」",
      "先「ということで、今回の謎解きはどうでしたか？」",
      "あ「なかなかいい謎解きだったよ。こういうテンカイも悪くないね」",
      "新「お、十（テン）X（カイ）ってことですね、うまいっすねチーフ！」",
      "あ「いやいや、それほどでも〜」",
      "先「……まぁダジャレはそこまでにして、これは販売決定でいいですかね？」",
      "あ「あ、あぁ〜もちろん！販売決定だ」",
      "新「やりましたね、先輩！なら早速タイトルを決めないと。どんなタイトルにしますか？」",
      "あ「それは、あれしかないだろ」",
      "先「ですね」",
      "新「え？どんなタイトルですか？」",
      "あ先「『テストプレイお願いします』」",
      "",
      "クリアおめでとう〜",
      "あと、先輩がテストプレイの合間にエクストラステップも作ったようなので、",
      "時間のある方は解いてみてね〜",
    ],
    instructionLabel: "EXTRA",
    instructionLines: [
      "LASTの封筒の中にあるlastステップのキットを取り出そう。",
      "謎を解き明かして、webサイトに入力するlastステップの答えを送信しよう。",
      "＜　ひらがなで入力　＞",
    ],
    placeholder: "えくすてんど",
  },
];

const state = {
  progress: 0, // index into STEPS
};

const flowEl = document.getElementById("flow");

function el(tag, className, children) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (Array.isArray(children)) children.forEach((c) => e.append(c));
  else if (children != null) e.append(children);
  return e;
}

function para(text, cls) {
  // keep explicit newlines from story
  const lines = String(text).split(/\n/);
  const frag = document.createDocumentFragment();
  const blockCls = cls || blockClass(text);
  lines.forEach((ln) => {
    const p = document.createElement("p");
    const sp = blockCls || speakerClass(ln);
    if (sp) p.className = sp;
    p.textContent = ln;
    frag.append(p);
  });
  return frag;
}

function blockClass(text) {
  // Color quoted chat blocks (『…』) in green
  if (text.includes("『")) return "speaker-senior";
  return "";
}

function speakerClass(line) {
  // Detect dialog prefixes and map to speaker classes
  // Variants: あ「 … 」 or あなた「 … 」
  //           新「 … 」 or 新入社員「 … 」
  //           先「 … 」 or 先輩「 … 」
  const starts = (p) => line.startsWith(p);
  if (starts("あ「") || starts("あなた「")) return "speaker-you";
  if (starts("新「") || starts("新入社員「")) return "speaker-junior";
  if (starts("先「") || starts("先輩「")) return "speaker-senior";
  return "";
}

function renderStep(idx) {
  const s = STEPS[idx];
  const section = el("section", "step fade-in");
  section.append(el("div", "node"));

  const block = el("div", "block");

  const story = el("div", "story");
  story.append(el("h2", null, s.storyTitle));
  s.story.forEach((t) => story.append(para(t)));

  const instruction = el("div", "instruction");
  instruction.append(el("div", "label", s.instructionLabel));
  const instLines = el("div", "lines");
  s.instructionLines.forEach((t) => instLines.append(para(t)));
  instruction.append(instLines);

  const form = el("form", "form");
  const inputWrap = el("div", "input");
  const input = document.createElement("input");
  input.type = "text";
  input.autocomplete = "off";
  input.inputMode = "kana";
  input.placeholder = s.placeholder || "こたえを入力";
  inputWrap.append(input);

  const btn = el("button", "btn", "送信");
  btn.type = "submit";

  form.append(inputWrap, btn);
  const feedback = el("div", "feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = input.value;
    const normalized = normalizeJa(raw);
    const target = normalizeJa(s.answer);
    if (!raw.trim()) return shake(input);

    if (normalized === target) {
      feedback.className = "feedback ok";
      feedback.textContent = "正解";
      input.disabled = true;
      btn.disabled = true;
      // advance to next step if exists
      if (idx + 1 < STEPS.length) {
        state.progress = idx + 1;
        // defer append for smoother UX
        setTimeout(() => {
          const nextEl = renderStep(idx + 1);
          nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
      } else {
        // All clear
        setTimeout(() => showAllClear(section), 280);
      }
    } else {
      feedback.className = "feedback err";
      feedback.textContent = "ちがうようだ";
      shake(input);
    }
  });

  block.append(story, instruction, form, feedback);
  section.append(block);
  flowEl.append(section);
  // Focus input when rendered
  setTimeout(() => input.focus(), 0);
  return section;
}

function showAllClear(parentSection) {
  const clear = el("div", "allclear fade-in");
  clear.append(el("div", "big", "ALL CLEAR"));
  clear.append(el("div", "small", "おつかれさまでした！"));
  parentSection.append(clear);
}

function shake(elm) {
  elm.classList.remove("shake");
  // force reflow
  void elm.offsetWidth;
  elm.classList.add("shake");
}

// Normalize: trim, NFKC, remove spaces, convert Katakana to Hiragana
function normalizeJa(str) {
  if (!str) return "";
  let s = str.normalize("NFKC").trim().toLowerCase();
  // remove spaces (half/full)
  s = s.replace(/[\s\u3000]/g, "");
  // convert Katakana to Hiragana, keep prolonged sound mark ー as-is
  let out = "";
  for (const ch of s) {
    const code = ch.codePointAt(0);
    if (code >= 0x30a1 && code <= 0x30f6) {
      out += String.fromCodePoint(code - 0x60);
    } else {
      out += ch;
    }
  }
  return out;
}

// boot
renderStep(0);
