// literal type

let car: "mers" = "mers";
// let icar : "mers" = "bmw"  mumkin emas faqat mers bo'lshi kerak

type action = "show" | "hide";

const div = document.getElementById("div") as HTMLDivElement;

type actionType = "show" | "hide";

function logg(action: actionType): boolean {
  switch (action) {
    case "hide":
      return false;
    case "show":
      return true;
  }
}

// ENUM  bu bir const dir

enum Dictionary {
  rus,
  uzb,
  eng,
}

// enum string turi

enum Dict {
  rus = "rus",
  eng = "Uzb",
}
enum Dictc {
  rus = 0,
  eng,
}

enum Desc {
  yes = 1,
  no = "no",
}

const runEnum = (): number => {
  return 2;
};

enum Descision {
  yes = 1,
  no = runEnum(),
}

// const uzb = Dictionary.uzb;
// console.log(uzb);
const uzbIndex = Dictionary.uzb;
const uzb = Dictionary[uzbIndex];
console.log(uzb);

enum Numbers {
  One,
  Two,
  Three,
  Four,
}

function getUzbNumber(number: Numbers) {
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
      const a: never = number;
  }
}

// tuples = array

// const array: [number, number, string, boolean] = [1, 3, "ster",false];

// array.push(4);
// array[3]

// const [a,...rest] = array;

// generics
interface Icar {
  name: string;
  year: string;
  onSpeed: <T, G, I>(data: T) => G;
}

function loggerTime<T>(data: T): T {
  // console.log(new Date());
  // return number;
  if (typeof data === "string") {
    data.toLowerCase();
  } else if (typeof data === "number") {
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
