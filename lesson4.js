/*Class Work

Задача 1

Напишите функцию sumArgs, которая суммирует все свои аргументы. При решении задачи используйте метод call или apply.

Задача 2

Перепишите с использованием встроенного метода bind:

function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
}; 

var f = bind(user.sayHi, user);  
f(); 
Задача 3

Напишите функцию joinArgs, которая выводит свои аргументы, разделенные символом 
‘*’ на экран в виде строки. Используйте прием “одалживания методов”. 
У вас должно получиться:

joinArgs(1,2,3) // 1*2*3 
joinArgs('hello', 'world', '!') // hello*world*!*/

//task1

function sumArgs(){
    return [].reduce.call(arguments, function(sum, current){
        return sum + current;
    });
}



console.log(sumArgs(10,20,30));

//task2

var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
}; 

var f = user.sayHi.bind(user);  
// f();

// task3

/*Напишите функцию joinArgs, которая выводит свои аргументы, разделенные символом 
‘*’ на экран в виде строки. Используйте прием “одалживания методов”. */


function joinArgs(){
    return [].join.call(arguments, '*');
}

console.log(joinArgs(1,3,4,5,6));


/*#Homework

###Задача 1

Представьте, что в JavaScript нет метода call, есть только метод apply. 
Используя apply, напишите метод call.*/


Function.prototype.call = function(context) {
  var args = [].slice.apply(arguments, [1]);
 
  return this.apply(context);
}

var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
};

var user2 = {
    firstName: 'Vasiliy',
}

console.log(user.sayHi.call(user2));


/*###Задача 2

Напишите функцию compose, которая принимает значение в качестве основного 
параметра и произвольное количество функций в качестве дополнительных параметров. 
Функция должна вернуть значение, полученное путем использования основного 
параметра как аргумента для функций, переданных ей в качестве дополнительных 
аргументов. Например:

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }
compose(5, doubleTheValue) //должно вернуться значение 10
compose(5, doubleTheValue, addOneToTheValue) // должно вернуться значение  11
Если функции передан только один параметр, она должна вернуть его значение.*/

function compose(val){
    var res = arguments[1](val);
    for(var i = 2; i < arguments.length; i++){
        res = arguments[i](res);
    }
    return res;
}

var doubleTheValue = function(val) { return val * 2; };
var addOneToTheValue = function(val) { return val + 1; };
var doubleDouble = function(val) { return val * 2; };
console.log(compose(5, doubleTheValue));
console.log(compose(5, doubleTheValue, addOneToTheValue, doubleDouble));



/*Задача 3

Создайте декоратор makeLogging(f, log), который принимает в качестве аргумента 
функцию f и массив log. Он должен возвращать обёртку вокруг f, которая при 
каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в 
f. В этой задаче можно считать, что у функции f ровно один аргумент. 
Работать должно так:

function work(a) {
  /* ...  // work - произвольная функция, один аргумент
}

function makeLogging(f, log) { /* ваш код }*/

// var log = [];
// work = makeLogging(work, log);

// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
//   alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }

function work(a) {
  return a * a;
}

var log = [];

function makeLogging(f, log){
    
    return function(a){
      log.push(a);
      f(a);
    }
}

var work = makeLogging(work, log);

work(1);
work(5);

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}