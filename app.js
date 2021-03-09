const quiz = [
  {
    question: '　Q1.　okazuの本名は何でしょう？',
    answers: [
      '【 A 】オダギリジョー',
      '【 B 】スダ マサキ',
      '【 C 】オグリ シュン',
      '【 D 】オチアイ カズナリ'
    ],
    correct: '【 D 】オチアイ カズナリ'
  }, {
    question: '　Q2.　okazuの主催していたイベント名は何でしょう？',
    answers: [
      '【 A 】共演',
      '【 B 】響宴',
      '【 C 】狂宴',
      '【 D 】競演'
    ],
    correct: '【 B 】響宴'
  },{
    question: '　Q3.　okazuの好きな小説の一文はどれでしょう？',
    answers: [
      '【 A 】天は人の上に人を作らず、人の下に人を作らず',
      '【 B 】僕の前に道はない。僕の後ろに道はできる',
      '【 C 】元々地上に道はない。歩く人が多くなれば、それが道になる。',
      '【 D 】祇園精舎の鐘の声 諸行無常の響きあり'
    ],
    correct: '【 C 】元々地上に道はない。歩く人が多くなれば、それが道になる。'
  },{
    question: '　Q4.　okazuの得意料理は何でしょう？',
    answers: [
      '【 A 】チーズメルトオニオンスープ',
      '【 B 】琥珀漬け卵のスタミナ丼',
      '【 C 】新玉葱のコンビーフボム',
      '【 D 】ネギージョ'
    ],
    correct: '【 D 】ネギージョ'
  },{
    question: '　Q5.　okazuの年齢は何歳でしょう？(2021年3月現在)',
    answers: [
      '【 A 】18歳',
      '【 B 】28歳',
      '【 C 】38歳',
      '【 D 】48歳'
    ],
    correct: '【 C 】38歳'
  }
];
const quizLength = quiz.length;
let quizIndex =0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題クイズの問題文、選択肢を定義
const setupQuiz = () => {
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
   if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

quizIndex++;

if(quizIndex < quizLength){
  //問題数がまだあればこちらを実行
  setupQuiz();
} else {
  //問題数がもうなければこちらを実行
  window.alert('終了！ あなたの正解数は'+ score +'/'+ quizLength +'です！');
  }

};

//ボタンをクリックしたら正誤判定
let handlerIndex =0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
  clickHandler(e);
  });
  handlerIndex++;
}
