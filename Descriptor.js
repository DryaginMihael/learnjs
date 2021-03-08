// Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют. (Свойство перечисляется при for of и Object.keys())
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

let user = {
    name: "John"
};

// Получение дескриптора для свойства name
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

// Изменение дескриптора
Object.defineProperty(user, "name", {
    writable: false
});
  
user.name = "Pete"; // При вызове будет ошибка, если 'use strict'. А так просто не присвоится


let obj = {prop1: '', prop2: '', prop3: ''};

// Описываем дескрипторы для нескольких полей
Object.defineProperties(obj, {
    prop1: {value: 1, writable: true},
    prop2: {value: 2, enumerable: false},
    prop3: {value: 3, configurable: false},
    // ...
});

console.log(obj);

// Получение дескрипторов
console.log(Object.getOwnPropertyDescriptors(obj));

// Копирование объекта вместе с флагами, также не игнорирует символьные свойства
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
console.log(clone);