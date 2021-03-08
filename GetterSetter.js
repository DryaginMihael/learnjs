let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`; // Вызывается при user.fullName
    },

    set fullName(value) {
        // Здесь можно накрутить валидацию
        if (value.includes(' ')) {
            [this.name, this.surname] = value.split(" "); // Вызывается при user.fullName = "Alice Cooper"
        } else {
            throw new Error('Invalid data');
        }
    }
};

// set fullName запустится с данным значением
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper