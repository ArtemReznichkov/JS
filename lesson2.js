/*
Задача 1.

Каков будет результат выполнения этого кода?

var value = 0;
function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }
  alert( value );
}
f();
Изменится ли внешняя переменная value ? Как изменится рузультат, если из строки 
var value = false убрать ключевое слово var?

// результатом данной функции будет true. Внешняя переменная изменится. 
// Результат не изменится. 

Задача 2.

Напишите функцию, возвращающую количество собственных вызовов.*/

function counter(){
    var curentCount = 1;
    return function(){
        return curentCount++;
    };
}
var count = counter();
count();
count();
count();
console.log(count());


//task3
// Задача 3.

// Следующий код создает массив функций-стрелков shoooters. По замыслу, каждый 
// стрелок должен выводить свой номер:

// function makeArmy() {
// var shooters = []; 

// for (var i = 0; i< 10; i++) {
//       var shooter = function() { // функция-стрелок
// alert(i); // выводит свой номер
// }; 
// shooters.push(shooter); 
// } 
// return shooters; 
// }
// var army = makeArmy(); 
// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10, а должен 5. 

// Сейчас все функции-стрелки выводят 10 вместо своего номера. 
// Поправьте код, чтобы при вызове каждой из них она выводила свой номер(индекс в массиве). 
// Предложите несколько вариантов.

function makeArmy() {
var shooters = []; 

  for (var i = 0; i< 10; i++) {
        var shooter = (function(x) {  
            return function(){
            alert(x);                   
            };
        })(i); 
    shooters.push(shooter); 
  } 
  return shooters; 
}

var army = makeArmy(); 

console.log(army);

//army[0](); стрелок выводит 10, а должен 0
//army[5](); стрелок выводит 10, а должен 5.


        // HOMEWORK
        
        
// Задача 1.

// Напишите функцию, которая принимает 1 параметр. При первом вызове она его 
// запоминает, при втором - суммирует переданный параметр с параметром, переданным
// при предыдущем вызове.

// Например:

// sum(3) = 3
// sum(5) = 8
// sum(228) = 236

function sum (){
    var sums = 0;
    return function(x){
        return sums += x;
    }
}

var sumValues = sum();

sumValues(4);
sumValues(6);
sumValues(10);
console.log(sumValues(8));


// Задача 2.
// Создайте функцию strCount, которая принимает один аргумент (объект) и считает 
// количество свойств строкового типа.

// Например:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //возвращает 3

function strCount(obj){
    var count = 0;
    for(var key in obj){
        if(typeof obj[key] === 'string') count++;
        if(typeof obj[key] === 'object') {
            for(var i in obj[key]){
                if(typeof obj[key][i] === 'string') count++;
            }
        }
    }
    return count;
    
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }))
  
  
// Задача 3.

// Напишите функцию, которая складывает числа при двойном вызове. Например:

// add(3)(4)  // 7

function add(a){
    return function(b){
        return a + b;
    }
}

console.log(add(3)(4));


