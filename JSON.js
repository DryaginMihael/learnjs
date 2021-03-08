let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,

    // Методы, символьные свойства, свойства, содержащие undefined пропускаются
    sayHi() { // будет пропущено
        alert("Hello");
    },
    [Symbol("id")]: 123, // также будет пропущено
    something: undefined, // как и это - пропущено
    room: {
        number: 23,
        toJSON() { // Если для объекта определен метод toJSON(), то при приведении выведется его результат 
          return this.number;
        }
    }
};

// let json = JSON.stringify(value[, replacer, space]) - синтаксис JSON.stringify
// value - Значение для кодирования.
// replacer - Массив свойств для кодирования или функция соответствия function(key, value).
// space отступы, используемые для форматирования.

  
// Преобразование в json-формат (строку)
let json = JSON.stringify(student);
console.log(json);

let json1 = JSON.stringify(student, ['name', 'age']); // Выведутся только поля, содержащие 'name', 'age'
console.log(json1);

let json2 = JSON.stringify(student, (key, value) => (key == 'isAdmin') ? undefined : value); // Поле isAdmin не выведется
console.log(json2);

let json3 = JSON.stringify(student, null, 2); // Отступы в два пробела (по умолчанию 0)
console.log(json3);

console.log(typeof json); // мы получили строку!


// let value = JSON.parse(str, [reviver]);
// str - JSON для преобразования в объект.
// reviver - Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.

let str = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3], "date":"2017-11-30T12:00:00.000Z" }';

user = JSON.parse(str);
console.log(user);

user = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value); // Используем функцию для коректного преобразования значений
    return value;
});

console.log(user.date);