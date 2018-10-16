class ExampleFunctions {
  msg: string = "HelloWorld";
  showMsg(): void {
    console.log(this.msg);
  }
  hello(): string {
    return "Hello world, functions return type string";
  }
  helloArg(message: string) {
    console.log(message);
  }
  helloManyArgLastOptional(message: string, message2?: string) {
    console.log(message + " " + message2);
  }
  helloManyArgLastOptionalSet(message: string, message2 = "HelloWorld") {
    console.log(message + " " + message2);
  }
  helloArrowFunction = message => console.log("Hello world arrow function" + message);
  helloArrowFunction2 = () => console.log("ArrowFunction");
  helloArrowFunction3 = (message: string) => console.log(message);
}