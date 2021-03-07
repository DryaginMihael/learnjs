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