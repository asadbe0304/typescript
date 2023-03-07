"use strict";
const firstName = "Asadbek";
const boolean = true;
console.log(boolean);
//array
const colors = ["red", "blue"];
const nums = [1, 2, 3, 4];
//any
let summ = 1;
summ = "w";
// function
//void function dan hech qanday malumot qaytmaydi
function logger(a) {
    return `${a + 2}`;
}
//number yoki string qaytarish
function loggers(a) {
    if (typeof a === "number") {
        return a.toFixed();
    }
    else if (typeof a === "string") {
        return a.toLowerCase();
    }
}
console.log(logger(2));
const number = [1, 2, 3, 4, 5, 6];
number.map((num) => {
    console.log(num);
});
const logCar = (car) => {
    return `name of car - ${car.name}, ${car.year} `;
};
console.log(logCar({ name: "BMQ" }));
console.log("sma");
