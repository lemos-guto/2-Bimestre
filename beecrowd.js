/*Bee 1020
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ageInDays = lines.shift().split(' ').map(Number);

let year = Math.floor(ageInDays / 365);
let remainingDays = ageInDays % 365;
let month = Math.floor(remainingDays / 30);
let day = remainingDays % 30;

console.log(`${year} ano(s)`)
console.log(`${month} mes(es)`)
console.log(`${day} dia(s)`)
*/

/*Bee 1001
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = lines.shift().split(' ').map(Number);
let b = lines.shift().split(' ').map(Number);
a = parseInt(a);
b = parseInt(b);
console.log(`X = ${a + b}`);
*/

/*Bee 1002
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = lines.shift().split(' ').map(Number);
let area = 3.14159 * (r * r);
let roundedArea = area.toFixed(4);

console.log(`A=${roundedArea}`);
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = lines.shift().split(' ').map(Number);
let b = lines.shift().split(' ').map(Number);
a = Number(a);
b = Number(b);
console.log(`X = ${a + b}`);