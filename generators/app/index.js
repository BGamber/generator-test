var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option("babel");

    this.method1 = function () {
      this.log("method 1 just ran");
    }
  
    this.method2 = function () {
      this.log("method 2 just ran");
    }
  }

  initializing() {
    this.log("Initialization starting.");
    this.method1();
    this.log("Initialization ending.");
  }

  end() {
    this.log("Ending.");
  }
};