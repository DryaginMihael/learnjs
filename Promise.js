const promise = new Promise((resolve, reject) => {setTimeout(() => {
    console.log('After delay');
    resolve('Success');
}, 500)});

promise.then(data => console.log(data));

const delay = ms => new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Done! ${ms}`);
    }, ms)
})

delay(1000)
    .then(data => delay(500))
    .then(data => console.log(data))
    .catch(() => console.log('Resolve'))
    .finally(() => console.log('Finally'))

async function asyncDelay() {
    try {
        const data = await delay(2000);
        console.log(data);
    } catch (e) {
        console.log('Error: ', e);
    }
}    

asyncDelay();

// Ждет пока выполнятся все, выполняет колбэк для каждого промиса
// Результат - массив
Promise.all([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))

// Выполняется для самого быстрого промиса
Promise.race([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))


// Вызывается только что-то одно, остальное игнорируется
let promise1 = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
  });


// Thenable объект
class Thenable {
    field = 'This is'
    constructor() {
        this.str = this.field + 'Thenable';
    }
    then(resolve, reject) {
        try {
            resolve(this.str);
        } catch(e) {
            reject(e);
        }
    }
}

// Пример цепочки промисов
const promise2 = new Promise((res, rej) => res(1))
promise2
    .then((val) => {console.log(val); return ++val})
    .then((val) => {console.log(val); return ++val})
    .then((val) => {console.log(val); return ++val})
    .then((val) => {console.log(val); return ++val})
    .then((val) => {return new Thenable();}) // Thenable object
    .then((val) => {console.log(val); return ++val}) // Это вызов метода then() Thenable объекта
    .then(() => new Promise((res) => setTimeout(() => res('This is Promise'), 0)))
    .then(console.log)

// Встроенный try catch не поймает ошибку так как он работает с синхронным кодом
new Promise(function(resolve, reject) {
    setTimeout(() => {
        // throw new Error("Whoops!");
        reject(new Error("Whoops!")); // Только такой вариант
    }, 1000);
    }).catch(console.log);


// Статические методы Promise
// Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.
// Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
// state: "fulfilled", если выполнен успешно или "rejected", если ошибка, value – результат, если успешно или reason – ошибка, если нет.
// Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.
// Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.
// Promise.reject(error) – возвращает промис с ошибкой error.