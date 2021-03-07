const symbol = Symbol('demo');
const other = Symbol('demo');

console.log(symbol, other);

// Символы всегда уникальны
console.log(symbol === other);

const obj = {
    name: 'Elena',
    [symbol]: 'meta',
    [other]: 'other'
}

// Символьные свойства не итерируются
for (let key in obj) {
    console.log(key);
}

// Можно использовать как приватные свойства при экспорте объекта
// В рамках другог модуля не достучаться до свойства если не экспортировать символ
console.log(obj[other]);