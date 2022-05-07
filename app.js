const quiz = [
  {
    question: '殺されそうな状況で「要求通りにしたら助けてやる」と言われた時になんと答えますか？',
    answers: ['『覚悟』とは！！暗闇の荒野に！！進むべき道を切り開くことだッ！', 'だが断る この岸辺露伴が最も好きな事のひとつは 自分で強いと思ってるやつに『NO』と断ってやる事だ…'],
    correct: 'だが断る この岸辺露伴が最も好きな事のひとつは 自分で強いと思ってるやつに『NO』と断ってやる事だ…'
  }, {
    question: '自分の仕事が成功していて同世代の誰よりも恵まれているのに、なぜ人の記憶を知りたいのかと問われた時の返答は？',
    answers: ['この岸辺露伴が金やちやほやされるためにマンガを描いてると思っていたのかァ―――――ッ!　ぼくは『読んでもらうため』にマンガを描いている！『読んでもらうため』ただそれだけのためだ', '『任務は遂行する』『部下も守る』。「両方」やらなくちゃあならないってのが「幹部」のつらいところだな。覚悟はいいか？オレはできてる'],
    correct: 'この岸辺露伴が金やちやほやされるためにマンガを描いてると思っていたのかァ―――――ッ!　ぼくは『読んでもらうため』にマンガを描いている！『読んでもらうため』ただそれだけのためだ'
  }, {
    question: '命が掛かったジャンケンで二連敗中。次負けると死ぬ場面でパーを出すと宣言してからジャンケン中に言うセリフは？',
    answers: ['いいかい！もっとも『むずかしい事』は！『自分を乗り越える事』さ！ぼくは自分の『運』をこれから 乗り越える！！', '「ブッ殺す」と心の中で思ったならッ！ その時スデに行動は終わっているんだッ！'],
    correct: 'いいかい！もっとも『むずかしい事』は！『自分を乗り越える事』さ！ぼくは自分の『運』をこれから 乗り越える！！'
  }, {
    question: '漫画について露伴先生はこの様に語っている。「『マンガ』とは想像や空想で 描かれていると思われがちだが 実は違う！自分の見たことや 体験したこと感動したことを描いてこそおもしろくなるんだ！」  そんな露伴先生が部屋にいた蜘蛛を見つけ、ペンで内臓を抉り苦しむ様子を観察した後のセリフと行動は？',
    answers: ['味もみておこう  ﾍﾟﾁｬﾘﾍﾟﾁｬ(蜘蛛を食べながら)', 'この味は！ウソをついてる『味』だぜ…(蜘蛛を舐めながら)'],
    correct: '味もみておこう  ﾍﾟﾁｬﾘﾍﾟﾁｬ(蜘蛛を食べながら)'
  }, {
    question: 'リアリティを追い求めるために蜘蛛の腹をペンで割いた際に「残酷だ」と言われた時の返答は？',
    answers: ['スゲーッ爽やかな気分だぜ。新しいパンツをはいたばかりの正月元旦の朝のよーによォ〜〜～ッ」', '残酷!?ど素人の小僧がこの『岸辺露伴』に意見するのかねッ！'],
    correct: '残酷!?ど素人の小僧がこの『岸辺露伴』に意見するのかねッ！'
  }, {
    question: 'チンチロリン対決をしていて明らかなイカサマに対し、それを見抜けない露伴先生が相手を逃さない為に自ら小指を半分切断した後叫んだ言葉は？',
    answers: ['きさま程度のスカタンにこの露伴が舐められてたまるかァーーッ！！！', 'こいつには、やると言ったらやる…『スゴ味があるッ！』'],
    correct: 'きさま程度のスカタンにこの露伴が舐められてたまるかァーーッ！！！'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
    window.scroll({top:0, behavior: 'smooth'});
  } else {
    // 問題数がもうなければこちらを実行
    window.alert('勝ったッ！第4部完！正解数' + score + ' / ' + quizLength + '！もっと岸辺露伴先生の生き方を知りたい方はこちら')
    window.location.href = 'https://www.s-manga.net/items/contents.html?isbn=4-08-851635-4';
  }
};

// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', (e) => {
  clickHandler(e);
});
$button[1].addEventListener('click', (e) => {
  clickHandler(e);
});
