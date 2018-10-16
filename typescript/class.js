var ExampleClass = /** @class */ (function () {
    function ExampleClass(msg) {
        this.msg = "ExmapleClass";
    }
    ExampleClass.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ExampleClass;
}());
var obj = new ExampleClass("HelloNewClass");
obj.printMsg();
var dog = {
    name: "Reksio",
    age: 3,
    color: "white"
};
console.log(dog);
var json = '{"name": "Max", "age": 4}';
var myDog = JSON.parse(json);
console.log(myDog);
