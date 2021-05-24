"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTitle = exports.styleBody = void 0;
console.log('I am coming from the dom.js file'); // const body = document.querySelector('body');

var styleBody = function styleBody() {
  // body.style.background = 'antiquewhite';
  console.log('styleBody!!!');
};

exports.styleBody = styleBody;

var addTitle = function addTitle(text) {
  // const title = document.createElement('h2');
  // title.textContent = text;
  // body.appendChild(title);
  console.log(text);
};

exports.addTitle = addTitle;
