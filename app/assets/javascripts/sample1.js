/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge
  }

Person.prototype.calculateAge = function() {
console.log(2016 - this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';

const John = new Person('John', 1999, 'teacher');

const Mark = new Person('Mark', 1995, 'designer');

const Fede = new Person('henrry', 1888, 'god');

John.calculateAge();

Fede.calculateAge();

console.log(John.lastName);

*/

/*
const personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

const John = Object.create(personProto);
John.name = "John";
John.yearOfBirth = "1999";

const Jane = Object.create(personProto, {
  name: { value: 'Jane'},
  yearOfBirth: {value: 1996},
  job: {value: 'enterprenaur'}
})
*/

/*
let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);

let obj1 = {
  name: 'john',
  age: 26
};

let obj2 = obj1;
obj1.age = 38;
console.log(obj1);
console.log(obj2);

let age = 27;
let obj = {
  name: "jonas",
  city: 'long beach'
};

function change(a, b) {
  a = 39;
  b.city = ' san francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*
let years = [1990, 1993, 1995, 2001, 2005];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++ ) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartAge(el) {
  if (el >= 18 && el <= 81) {
  return Math.round(206.9 - (0.67 * el));
} else {
  return -1;
}
}

var ages = arrayCalc(years, calculateAge);

let fullAges = arrayCalc(ages, isFullAge);

let rates = arrayCalc(ages, maxHeartAge);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

// function getValueForm() {
//   let result = document.getElementById('sampleButton2').value
//   if (result !== 12 ) {
//       document.getElementById('sampleButton2').addEventListener('change', function() {
//       document.getElementById('sampleTitle').style.color = "red";
//       document.getElementById('sampleTitle').textContent = '適切に入力してください'
//   })
// } else if (result === 12) {
//       document.getElementById('sampleButton2').addEventListener('change', function() {
//       document.getElementById('sampleTitle').textContent = 'good!'
//   })
//  }
// }

// function justDo() {
//   let formValue = document.getElementById('sampleButton2').value
//   return formValue
// }

// function justFun() {
//   document.getElementById('sampleButton2').addEventListener('change', function() {
//   document.getElementById('sampleTitle').textContent = document.getElementById('sampleButton2').value
//   return document.getElementById('sampleButton2').value
//   })
// }

// getValueForm();
//
//
//
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ', what subject do you teach?')
//     };
//   } else {
//     return function(name) {
//       console.log('hello', + name +', what do you do?');
//     }
//    }
// }
//
// interviewQuestion('teacher')('John');

// let teacherQuestion = interviewQuestion('teacher');
// let designerQuestion = interviewQuestion('designer');
// designerQuestion('john');
// teacherQuestion('john');

(function() {
  let time = 180;
  let counter;
  let min = document.getElementById('min');
  let sec = document.getElementById('sec');
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let reset = document.getElementById('reset');

  start.onclick = function() {
    toggle();
    counter = setInterval( count, 1000 );
  }

  stop.onclick = function() {
    toggle();
    clearInterval(counter)
  }

  reset.onclick = function() {
    time = 180;
    sec.innerHTML = time % 60;
    min.innerHTML = Math.floor(time / 60);
    clearInterval(counter)
    start.disabled = false;
  }

  function toggle() {
    if (start.disabled) {
      start.disabled = false;
      stop.disabled = true;
    } else {
      start.disabled = true;
      stop.disabled = false;
    }
  }
  function count() {
    if (time === 0) {
      sec.innerHTML = 0;
      min.innerHTML = 0;
      alert('3分経過しました');
    } else {
      time -= 1;
      min.innerHTML = Math.floor(time / 60);
      sec.innerHTML = time % 60;
    }
  }
})();

function countLength(text, field) {
  document.getElementById('textlength').innerHTML = 'あと' + (140 - text.length) + '文字'
};
