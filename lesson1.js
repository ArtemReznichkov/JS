/*###Задача 1. Создайте функцию find(arr, value), которая ищет в массиве arr 
значение value и возвращает его номер, если найдено, или -1, если не найдено.

###Задача 2.
var arr = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6]; Отсортируйте 
массив arr, используя алгоритм пузырьковой сортировки.

###Задача 3. Напишите функцию bigToSmall, которая будет принимать один аргумент 
arr (двухмерный массив). Ваше задание:

Привести двухмерный массив к одномерному.
Отсортировать массив в нисходящем порядке.
Использовать символ ‘>’ как разделитель при превращении массива в строку.
Например:

  bigToSmall([[1,2],[3,4],[5,6]])  "6>5>4>3>2>1"
  bigToSmall([[1,3,5],[2,4,6]])  "6>5>4>3>2>1"
  bigToSmall([[1,1],[1],[1,1]])  "1>1>1>1>1"*/
  
  
  
//task1

var array = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6];

function find(arr, value) {
    return arr.indexOf(value);
}

function find1(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value) return i;
    }
    return -1;
}

console.log(find(array, 1002));



//task2

function bubbleSort(arr) { 
    for (var i = 0; i < array.length - 1; i++){
        for (var j = 0; j < array.length - 1 - i; j++){
            if (array[j + 1] < array[j]){
                var min = array[j + 1]; 
                array[j + 1] = array[j]; 
                array[j] = min;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(array));



//task3

function bigToSmall(arr){
    var array = [];
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            array.push(arr[i][j]);
        }
    }

   return array.sort(function(a, b) {
       return a - b;
   }).join('>');
    
}

console.log(bigToSmall([[1,3,5],[2,4,6]]));





/*#Class Work

###Задача 1. Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.

Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта. 
###Задача 2. Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

###Задача 3. Дан массив чисел: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].

Найдите максимальное и минимальное значение массива.
Все положительные и четные числа запишите в другой массив. Результаты выведите на экран.*/

// task 1

var user = {};
/*user.name = 'Vasya';
user.surname = 'Petrov';
user.name = 'Sergey';
delete(user.name);*/

// task 2

function isEmpty(obj){
/*    for (var key in obj) {
        return false;
    }
    return true;*/
    
    if(Object.keys(obj).length) return false;
    return true;
}

console.log(isEmpty(user));

// task 3

var array = [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90];

var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);
console.log(max);
console.log(min);

var positive = array.filter(function(number){
    return number > 0;
});

var negative = array.filter(function(number){
    return number < 0;
});

console.log(positive);
console.log(negative);