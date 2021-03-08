// Genarator
function *gen(num = 4) { // Возможен синтаксис function* gen() и function *gen()
    for (let i = 0; i < num; i++) {
        try {
            yield i;
        } catch (e) {
            console.log('Error: ', e)
        }
    }
}

const iter = gen(3);

console.log(iter.next());
console.log(iter.next());
console.log(iter.throw('MyError'));
console.log(iter.next());

for (let i of gen(4)) {
    console.log(i);
}

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3; // Не используем return чтоб цикл for of вывел все значения
  }
  
  let generator = generateSequence();
  
  for(let value of generator) {
    console.log(value); // 1, затем 2, затем 3
  }

// Использование генератора Symbol.iterator для упрощения записи
let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
        for(let value = this.from; value <= this.to; value++) {
        yield value;
        }
    }
};

console.log( [...range] ); // 1,2,3,4,5


// С помощью next(value) можно записывать значение в текущий yield
function* gen() {
    let ask1 = yield "2 + 2 = ?";
  
    alert(ask1); // 4
  
    let ask2 = yield "3 * 3 = ?"
  
    alert(ask2); // 9
  }
  
  let generator = gen();
  
  alert( generator.next().value ); // "2 + 2 = ?"
  
  alert( generator.next(4).value ); // "3 * 3 = ?"
  
  alert( generator.next(9).done ); // true