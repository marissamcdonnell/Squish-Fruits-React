var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

const arr = [1, 2, 3];
const iAmJava = () => console.log(...arr);
window.iAmJava = iAmJava;
