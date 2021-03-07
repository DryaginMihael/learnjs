// Genarator
function *gen(num = 4) {
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