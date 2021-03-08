const array = [10, 20, 30, 40];
const str = 'Hello'

const iter = str[Symbol.iterator]();
// const iter = str[Simbol.iterator]();

console.log(iter.next(), iter.next(), iter.next(), iter.next(), iter.next(), iter.next());

const country = {
    values: ['ru', 'kz', 'ua', 'by'],

    // Свой кастомный итератор для объекта
    [Symbol.iterator]: function() {
        let i = 0;
        return {
            next: () => { // Стрелочная функция, чтоб не потерять контекст
                const value = this.values[i]
                i++;
                return {
                    value,
                    done: i > this.values.length
                }
            } 
        }
    }
}

// Цикл for of используется Symbol.iterator
for (let i of country) {
    console.log(i);
}

let range = {
    from: 1,
    to: 5,
  
    // for..of range вызывает этот метод один раз в самом начале
    [Symbol.iterator]() {
      // ...он возвращает перебираемый объект:
      // далее for..of работает только с этим объектом, запрашивая следующие значения
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается при каждой итерации цикла for..of
        next() {
          // нужно вернуть значение как объект {done:.., value :...}
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // Оператор Spread тоже вызывает Symbol.iterator
  // при переборе объекта range будут выведены числа от range.from до range.to
  console.log([...range]); // 1,2,3,4,5


  // Использование генератора Symbol.iterator для упрощения записи
  let range1 = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  console.log( [...range] ); // 1,2,3,4,5