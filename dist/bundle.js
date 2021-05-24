"use strict";

var _dom = require("./dom");

var greet = function greet(name) {
  var nam = name;
  console.log("Hey ".concat(nam));
};

greet('I am coming from the index.js');
(0, _dom.addTitle)('hellooo');
(0, _dom.styleBody)();
