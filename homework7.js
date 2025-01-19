var test = 'Wonderful, Joyful, Happiness, Time, Task, Apple';
var re = /\b[a-zA-Z^Aa]{6,}\b/gm;
console.log(test.search(re));
var res = test.match(re);
console.log(res);