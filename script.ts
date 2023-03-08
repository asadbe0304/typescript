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

// type Cartype = {
//   name: string;
//   year?: string;
// };

interface Icar {
  name: string;
  year?: string;
}
interface IBM extends Icar {
  colors: string;
  extra: boolean;
}

const logCar = (car: Icar): string => {
  return `name of car - ${car.name}, `;
};
const logBmw = (data: IBM): void => {
  console.log(data.extra);
};

console.log(logCar({ name: "BMW" }));

interface Ipoint {
  x: number;
  y: number;
}
interface I3dpoint extends Ipoint {
  z: number;
}

function logPoint(point: Ipoint): void {
  const d3: I3dpoint = point as I3dpoint;
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
