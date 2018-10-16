var ExampleFunctions = /** @class */ (function () {
    function ExampleFunctions() {
        this.msg = "HelloWorld";
        this.helloArrowFunction = function (message) { return console.log("Hello world arrow function" + message); };
        this.helloArrowFunction2 = function () { return console.log("ArrowFunction"); };
        this.helloArrowFunction3 = function (message) { return console.log(message); };
    }
    ExampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return "Hello world, functions return type string";
    };
    ExampleFunctions.prototype.helloArg = function (message) {
        console.log(message);
    };
    ExampleFunctions.prototype.helloManyArgLastOptional = function (message, message2) {
        console.log(message + " " + message2);
    };
    ExampleFunctions.prototype.helloManyArgLastOptionalSet = function (message, message2) {
        if (message2 === void 0) { message2 = "HelloWorld"; }
        console.log(message + " " + message2);
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.showMsg();
example.hello();
example.helloArg("Example string");
example.helloManyArgLastOptional("Example string");
example.helloManyArgLastOptionalSet("Example string");
example.helloArrowFunction("ArrowFunction");
example.helloArrowFunction2();
example.helloArrowFunction3("ArrowFunction");
