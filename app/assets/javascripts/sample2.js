// function game() {
//   let score = Math.random() * 10;
//   console.log(score >= 5);
// }
/*
(function () {
  let score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);


(function (goodluck) {
  let score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5);


function retirement(retirementAge) {
  let a = 'years left until retirement';
  return function(yearOfBirth) {
    let age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a)
  }
}

let retirementUS = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementUS(1996);
retirementGermany(1996);
retirementIceland(1996);
// retirement(66)(1996);

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log(name + ', what subject do you teach?')
    } else {
      console.log('hello', + name +', what do you do?');
    }
  }
}

let teacherQuestion = interviewQuestion('teacher')
interviewQuestion('teacher')('John');
*/
/*
let John = {
  name: 'John',
  age: 24,
  job: 'teacher',
  presentation: function(style, TimeOfDay) {
    if (style === 'formal') {
      console.log('Good' + TimeOfDay + ', Ladies and Gentlemen I\'m' + this.name + ', I\'m a ' + this.job + 'and I\'m' + this.age + 'years old.');
    } else if (style === 'friendly') {
      console.log('Hey What\'s up? I\'m' + this.name + ', I\'m a ' + this.job + 'and I\'m' + this.age + 'years old. Have a nice' + TimeOfDay + '.');
    }
  }
}

let emily = {
  name: 'Emily',
  age: 36,
  job: 'designer'
};

John.presentation('formal', 'morning');
John.presentation.call(emily, 'friendly', 'afternoon');
*/
/*
(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer');
    } else {
      console.log('Wrong answer. Try again :)');
    }
  }

  // コンストラクタ関数＝＝＝

  let q1 = new Question('Is Javascript the coolest programming language in the world?', ['yes', 'no'], 0);

  let q2 = new Question('What is this counrse\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

  let q3 = new Question('what does best describe coding?', ['boring', 'fun', 'tedious'], 2);


  let questions = [q1, q2, q3];

  let n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  let answer = parseInt(prompt('please select correct answer'));

  questions[n].checkAnswer(answer);
})();
*/

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer');
    } else {
      console.log('Wrong answer. Try again :)');
    }
  }

  // コンストラクタ関数＝＝＝

  let q1 = new Question('Is Javascript the coolest programming language in the world?', ['yes', 'no'], 0);

  let q2 = new Question('What is this counrse\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

  let q3 = new Question('what does best describe coding?', ['boring', 'fun', 'tedious'], 2);

  let questions = [q1, q2, q3];

  function nextQuestion() {
    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    let answer = prompt('please select correct answer');
    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer));
      nextQuestion();
    }
  }
  nextQuestion();
})();
