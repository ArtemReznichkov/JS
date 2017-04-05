/*Class Work

Задача 1.

Код для задачи:

<body>
  <div>Пользователи:</div>
  <ul>
    <li>user1</li>
    <li>user2</li>
  </ul>

  <script>
    // ... ваш код
  </script>

</body>

Задание:

Напишите код, который получит объект для тега head и запишет его в переменную.
Напишите код, который получит объект для тега ul и запишет его в переменную.
Напишите код, который получит объект для второго тега li и запишет его в переменну*/

var head = document.getElementsByTagName('head')[0];
var ul = document.getElementsByTagName('ul');
var secondLi = document.querySelectorAll('li')[1];
console.log(head);

/*Задача 2.

Код для задачи:

<body>

  <div id="widget" data-widget-name="menu">Выберите жанр</div>

  <script>
    /* ... */
//   </script>
// </body>
// Задание:

// Напишите код, который получит объект для тега div и запишите его в переменную.
// Запишите значение атрибута "data-widget-name" в переменную.

var div = document.getElementById('widget');

var dataWidgetName = div.dataset.widgetName;

console.log(dataWidgetName);

/*Напишите код, который выделит все ячейки в таблице по диагонали красным цветом:

// в переменной td DOM-элемент для тега <td>
td.style.backgroundColor = 'red';*/

var table = document.querySelector('table');

for(var i = 0; i < table.rows.length; i++){
     var row = table.rows[i];
     row.cells[i].style.backgroundColor = 'red';
}
console.log(table);


//HOMEWORK

/*Есть дерево из тегов ul и li.

Напишите код, который для каждого элемента li выведет:

Текст непосредственно в нём указанный (без подразделов).
Количество всех вложенных в него элементов li.*/

var lis = document.getElementsByTagName('li');
    for (i = 0; i < lis.length; i++) {
      var title = lis[i].firstChild.data;
      title = title.trim();
      var childCount = lis[i].getElementsByTagName('li').length;
      alert(title + ': ' + childCount);
    }

/*
Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.

<div>Это</div>
<div>Элементы</div>

<script>
  var elem = document.createElement('div');
  elem.innerHTML = '<b>Новый элемент</b>';

  function insertAfter(elem, refElem) { /* ваш код  }

  var body = document.body;

  // вставить elem после первого элемента
  insertAfter(elem, body.firstChild); // <--- должно работать

  // вставить elem за последним элементом
  insertAfter(elem, body.lastChild); // <--- должно работать
</script>*/


  function insertAfter(elem, refElem) {
  var parent = refElem.parentNode;
  var next = refElem.nextSibling;
  if (next) {
    return parent.insertBefore(elem, next);
  } else {
    return parent.appendChild(elem);
  }
}


/*Задача 3

Метод elem.closest(css) для поиска ближайшего родителя, удовлетворяющего 
селектору css, не поддерживается некоторыми браузерами, например IE11-. 
Создайте для него полифилл.*/

(function() {


  if (!Element.prototype.closest) {


    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})()

