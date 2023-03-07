const firstName: string = "Asadbek";

const boolean: boolean = true;

console.log(boolean);
//array
const colors: string[] = ["red", "blue"];
const nums: number[] = [1, 2, 3, 4];

//any

let summ: any = 1;
summ = "w";

// function
//void function dan hech qanday malumot qaytmaydi
function logger(a: number): string {
  return `${a + 2}`;
}

//number yoki string qaytarish
function loggers(a: number | string) {
  if (typeof a === "number") {
    return a.toFixed();
  } else if (typeof a === "string") {
    return a.toLowerCase();
  }
}

console.log(logger(2));

const number: number[] = [1, 2, 3, 4, 5, 6];
number.map((num: number) => {
  console.log(num);
});

const logCar = (car: { name: string; year?: number }):string => {
  return `name of car - ${car.name}, `;
};

console.log(logCar({ name: "BMQ"}));
console.log("sma");
