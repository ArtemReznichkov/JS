/* CLASSWORK

Задача 1

Почему первое равенство – неверно, а второе – верно?

alert( [] == [] ); // false
alert( [] ==! [] ); // true
Какие преобразования происходят при вычислении?
Потому, что, по-сути, сравниваються два обьекта, а они не могут быть равными друг другу.
Задача 2

Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

Метод read() запрашивает два значения при помощи prompt и запоминает их в 
свойствах объекта.
Метод sum() возвращает сумму двух значений принятых от пользователя.
Метод mul() возвращает произведение двух значений принятых от пользователя.
Пример использования:

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );*/


function Calculator(){
    
    this.read = function(){                                   
        this.a = +prompt('input first value');
        this.b = +prompt('input second value');
    };
    
    this.sum = function(){
        return this.a + this.b;
    };
    
    this.mul = function(){
        return this.a * this.b;
    }
    
}


/*var calculator = new Calculator();
calculator.read();*/

/*alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );*/



/*Задача 3

Напишите функцию-конструктор Summator, которая создает объект с двумя методами.

Метод sum(a,b) возвращает сумму двух значений;
Метод run() запрашивает два значения при помощи prompt и выводит их сумму, 
используя метод sum. В итоге вызов new Summator().run() должен спрашивать два 
значения и выводить их сумму.*/


function Summator(){
    
    this.sum = function(a, b){
        return a + b;
    };
    
    this.run = function(){
        var c = +prompt('input first value');
        var d = +prompt('input second value'); 
        alert(this.sum(c, d));
    };
}

var calcul = new Summator();

/*calcul.run();*/




/*                             Homework 3

Задача 1

Напишите функцию sum, которая будет работать как показано в примере ниже:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
Количество скобок может быть любым*/

function sum(a){
    var curentSum = a;
    
    function plus(b){
        curentSum += b;
        return plus;
    }
    
    plus.toString = function(){
        return curentSum;
    }
    
    return plus;
}

///*console.log(sum(5)(-1)(2));*/


// task 2


/*Напишите функцию runString, которая:

1)принимает 2 аргумента:

arg: аргумент любого типа
объект со свойствами:
param: строка.
func: строка, содержащая код функции.
2)выполняет код функции func, переданной ей в качестве аргумента, 
с параметром arg. Например:*/

var arg = 4,                         // аргумент для функции runString
    obj = {
      param: 'num',                  // имя параметра для функции в свойстве func
      func: 'return Math.sqrt(num)'  // функция, которая должна быть вызванв с  агрументом arg
    };

/*runString(arg, obj)  */    

function runString(arg, obj) {
  var param = new RegExp(obj.param, "g");
  var fn = Function(obj.func.replace(param, arg));
  return fn();
}
console.log(runString(arg, obj))
// new Function('num', 'return math.sqrt(num)');   



 // task 3

/*Дан объект ladder

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};
Сейчас, для последовательного вызова нескольких методов объекта, нужно вызывать каждый из них отдельно:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1 
Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:

ladder.up().up().down().up().down().showStep(); // */

var ladder = {
  step: 0,
  up: function() {
    return this;
  },
  down: function() { 
    this.step--;
    return this;
  },
  showStep: function() { 
    alert( this.step );
  }
};


/*ladder.up().up().down().up().down().showStep();*/