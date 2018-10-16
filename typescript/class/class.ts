class ExampleClass {
  msg: string = "ExmapleClass";

  constructor(msg?: string) {}

  printMsg() {
    console.log(this.msg);
  }
}

let obj = new ExampleClass("HelloNewClass");

obj.printMsg();

interface Dog {
  name: string;
  age: number;
  color: string;
  date?: Date;
}

let dog: Dog = {
  name: "Reksio",
  age: 3,
  color: "white"
};

console.log(dog);

let json = '{"name": "Max", "age": 4}';

let myDog: Dog = JSON.parse(json);

console.log(myDog);
