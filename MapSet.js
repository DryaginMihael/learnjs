const map = new Map(
    [['a', 1]]
);

// Напоминает ассоциативные массивы в PHP
console.log(map);

// get возвращает значение
console.log(map.get('a'));

// set возвращает Map
// В качестве ключей можно использовать любой тип
// от объектов до Simbol
map.set('b', 2).set(NaN, 'Number').set(42, 'demo');
console.log(map.get(NaN));

// Очистить Map
// map.clear();

// Проверка на существования ключа
console.log(map.has(42));

// Удаление 
map.delete('b');

// Размер map
console.log(map.size)

// Ключи, значения, entries
console.log(map.values());
console.log(map.keys());
console.log(map.entries());

// Set (Множество - значения не повторяются)
// Также можно передавать абсолютно любой тип данных
const set = new Set([1, 1, 2, 3, 5, 8, 12, undefined, true, null, NaN, {}]);
console.log(set);
console.log(set.add(21));
// set.clear();
set.delete(5); // Удаляет именно значение

console.log(set.values()); // Значения
console.log(set.keys()); // Те же значения
console.log(set.entries()); // Массивы в которых значения дублируются



