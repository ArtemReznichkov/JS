/*#Class Work

Задача 1

Напишите функцию printNumber, которая последовательно выводит в консоль 
числа от 1 до 20, с интервалом между числами 100мс. То есть, весь вывод должен 
занимать 2000мс, в течение которых каждые 100мс в консоли появляется очередное 
число.*/

function printNumber(){
    var count = 1;
    function inter(){
        console.log(count++);
    }
    var timer = setInterval(inter, 100);
    
    setTimeout(function(){
        clearInterval(timer);
        console.log('timer stoped');
    }, 2000);
}

// printNumber();

/*Задача 2

Превратите объект leader из примера ниже в JSON:

var leader = {
  name: "Василий Иванович",
  age: 35
};
После этого конвертируйте получившуюся строку обратно в объект.*/

var leader = {
  name: "Василий Иванович",
  age: 35
};

var jsnLeader = JSON.stringify(leader);
console.log(jsnLeader);

var objLeader = JSON.parse(jsnLeader);
console.log(objLeader);


/*Задача 3

Напишите функцию, которая принимает один аргумент и возвращает его тип данных. 
Выполните обработку исключений в случае передачи двух и больше аргументов.*/

function typeOf(arg){
    if (arguments.length !== 1) throw new Error('You gave more or less one argument');
    if (typeof arg == 'object') {
        return {}.toString.call(arg).slice(8, -1);
    }
    return typeof arg;
}

console.log(typeOf(1));



/*#Homework

Задача 1

Напишите программу, которая принимает математическое выражение 
(используйте prompt) и результат его получает через eval. При ошибке нужно 
выводить сообщение и просить изменить некорректный ввод. Ошибкой считается не 
только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN, 
например 0/0.*/

var expr, res;

while (true) {
  expr = prompt("Введите выражение?", '2-');
  if (expr == null) break;

  try {
    res = eval(expr);
    if (isNaN(res)) {
      throw new Error("Результат неопределён");
    }

    break;
  } catch (e) {
    alert( "Ошибка: " + e.message + ", повторите ввод" );
  }
}

alert( res );

/*Задача 2

Напишите функцию smartSum, которая:

Принимает произвольное количество аргументов;
Возвращает сумму всех переданных ей аргументов;
Принимает за 0 любой аргумент, который не может быть преобразован в числовой 
тип (т.е при попытке его парсить возвращается NaN);
Может быть вызвана неограниченное количество раз;
smartSum(3) // 3; 
smartSum(1, 2)  // 3;
smartSum(1, 3)(2) // 6; 
smartSum(1, 2)(3, 4, 5)(6)(7, 10) // 38; */

function smartSum() {
  var args = Array.prototype.slice.call(arguments);
  
  for (var i = 0; i < args.length; i++) {
    if(typeof args[i] !== 'number' || isNaN(arguments[i])) {
      args[i] = 0
    }
  }
  var sum = args.reduce(function(a, b) {
    return a + b
  });

  function f() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
      if(typeof args[i] !== 'number' || isNaN(arguments[i])) {
        args[i] = 0
      }
    }
    var b = args.reduce(function(a, b) {
      return a + b
    });
    sum += b;
    return f;
  }
  
  f.toString = function() {
    return sum;
  }

  return f;
} 




/*Задача 3

Сделайте таймер обратного отсчета, который выполняет обратный отсчет от зданого 
числа до нуля. Когда доходит до нуля - выводит сообщение о том, что отсчет 
закончен.

Например, var timer=10, каждую секунду на странице меняется числа - 10, 9, 8... 
и так далее до нуля.*/

function timer(){
    var time = 11;
    
    var inter = setInterval(function(){
        time--;
        console.log(time);
        if (time === 0) clearInterval(inter)
    }, 500);
    
}

timer();