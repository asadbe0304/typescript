"use strict";
// literal type
let car = "mers";
const div = document.getElementById("div");
function logg(action) {
    switch (action) {
        case "hide":
            return false;
        case "show":
            return true;
    }
}
// ENUM  bu bir const dir
var Dictionary;
(function (Dictionary) {
    Dictionary[Dictionary["rus"] = 0] = "rus";
    Dictionary[Dictionary["uzb"] = 1] = "uzb";
    Dictionary[Dictionary["eng"] = 2] = "eng";
})(Dictionary || (Dictionary = {}));
// enum string turi
var Dict;
(function (Dict) {
    Dict["rus"] = "rus";
    Dict["eng"] = "Uzb";
})(Dict || (Dict = {}));
var Dictc;
(function (Dictc) {
    Dictc[Dictc["rus"] = 0] = "rus";
    Dictc[Dictc["eng"] = 1] = "eng";
})(Dictc || (Dictc = {}));
var Desc;
(function (Desc) {
    Desc[Desc["yes"] = 1] = "yes";
    Desc["no"] = "no";
})(Desc || (Desc = {}));
const runEnum = () => {
    return 2;
};
var Descision;
(function (Descision) {
    Descision[Descision["yes"] = 1] = "yes";
    Descision[Descision["no"] = runEnum()] = "no";
})(Descision || (Descision = {}));
// const uzb = Dictionary.uzb;
// console.log(uzb);
const uzbIndex = Dictionary.uzb;
const uzb = Dictionary[uzbIndex];
console.log(uzb);
var Numbers;
(function (Numbers) {
    Numbers[Numbers["One"] = 0] = "One";
    Numbers[Numbers["Two"] = 1] = "Two";
    Numbers[Numbers["Three"] = 2] = "Three";
    Numbers[Numbers["Four"] = 3] = "Four";
})(Numbers || (Numbers = {}));
function getUzbNumber(number) {
    switch (number) {
        case Numbers.One:
            return "Bir";
        case Numbers.Two:
            return "Ikki";
        case Numbers.Three:
            return "Uch";
        case Numbers.Four:
            return "To'rt";
        default:
            const a = number;
    }
}
function loggerTime(data) {
    // console.log(new Date());
    // return number;
    if (typeof data === "string") {
        data.toLowerCase();
    }
    else if (typeof data === "number") {
        data.toFixed();
    }
    return data;
}
// function logerDate(number: number): number {
// console.log(new Date());
// return number;
// }
const cars = {
    name: "bmw",
    color: "Black",
};
// const myCar = loggerTime<Icar>(cars);
// loggerTime<number>(9);
// loggerTime<string>("asad");
// generic class
