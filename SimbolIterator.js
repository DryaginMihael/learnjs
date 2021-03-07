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
            next: () => {
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