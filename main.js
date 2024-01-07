

var form = document.querySelector("#addForm");
var itemList = document.querySelector("#items");
var filter = document.querySelector("#filter");

// Добавление новой задачи прослушка события
form.addEventListener('submit', addItem);

// Удаление элемента - прослушка клика
itemList.addEventListener('click', removeItem);

// Фильтрация списка дел - прослушка ввода
filter.addEventListener('keyup', filterItems);

// Добавление новой задачи функция
function addItem(e) {
    // Отменяем отправку формы
    e.preventDefault();

    // Находим инпут с текстом для новой задачи
    var newItemInput = document.querySelector('#newItemText');

    // Получаем текст из инпута
    var newItemText = newItemInput.value;

    // Cоздаем новый элемент
    var newElement = document.createElement("li");
    newElement.className = "list-group-item";

    // Добавим текс в новый элемент
    var newTextNode = document.createTextNode(newItemText);
    newElement.appendChild(newTextNode);

    // Создаем кнопку
    var deleteBtn = document.createElement('button');

    // Добавляем текст в кнопку
    deleteBtn.appendChild(document.createTextNode('Удалить'));

    // Добавляем Css класс в кнопку
    deleteBtn.className = ('btn btn-light btn-sm float-right');

    // Добавляем data атрибут
    deleteBtn.dataset.action = 'delete';

    // Помещаем кнопку внутрь тега li
    newElement.appendChild(deleteBtn);
    console.log(newElement);

    // Добавляем новую задачу в список со всеми задачами
    itemList.prepend(newElement);

    // Очистить поле добавления новой задачи
    newItemInput.value = "";
}

// Удаление элемента функции
function removeItem(e) {
    console.log(e.target);

    if (e.target.hasAttribute('data-action') && e.target.getAttribute('data-action') == 'delete') {
       if (confirm('Вы уверены?')) {
        e.target.parentNode.remove();
       }
    }
}

// Фильтрация списка дел функция
function filterItems(e) {
    // Получаем фразу для поиска и переводим ее в нижний регистр
    var searchedText = e.target.value.toLowerCase();

    // 1. Получаем список всех задач
    var items = itemList.querySelectorAll('li');

    // 2. Перебираем циклом все теги li с задачами
    items.forEach(function(item){
        // Получаем текст задачи из списка и переводим его в нижний регистр
        var itemText = item.firstChild.textContent.toLowerCase();

        // Проверяем вхождение искомой подстроки в текс задачи
        if (itemText.indexOf(searchedText) != -1) {

        // Если вхождение есть - показываем элемент с задачей
            item.style.display = "block";
        // Если вхождения нет - скрываем элемент с задачей
        } else {
            item.style.display = "none";
        }
    })
}





