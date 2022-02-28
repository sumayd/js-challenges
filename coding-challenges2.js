//INCLUDE 8 SECTIONS
'use strict';

//Hoisting and TDZ in Practice
// console.log (me);
// console.log (job);
// console.log (year);

var me = 'Sümeyye';
let job = 'Frontend Developer';
const year = 1994;


// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// function addDecl(a,b){
//     return a+b;
// }

// const addExpr = function (a,b) {
//     return a+b;
// }

// const addArrow = (a,b) => a + b;


if(!numProducts) deleteShoppingCart();
var numProducts = 10;

function  deleteShoppingCart() {
    // console.log('All products deleted!')
}

var x = 1;
let y = 2;
const z = 3;

//The this Keyword in Practice
// console.log(this);

const calcAge = function (birthYear) {
    // console.log(2037 - birthYear);
    // console.log(this);
}
calcAge(1994);

const calcAgeArrow = birthYear => {
    // console.log(2037 - birthYear);
    // console.log(this);
};
calcAge(1993);

// const sumeyye = {
//     year : 1994,
//     calcAge : function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     },
// };
// sumeyye.calcAge();

const matilda = {
    year : 2017,
};

// matilda.calcAge = sumeyye.calcAge;
// matilda.calcAge();

// const f = sumeyye.calcAge;
// f();

var firstName = 'Matilda';
const sumeyye = {
    firstName : 'Sümeyye',
    year : 1994,
    calcAge : function () {
        console.log(this);
        console.log(2037 - this.year);
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // };
     
        const isMillenial = () => {
            console.log(self.year >= 1981 && self.year <= 1996);
            // console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};

sumeyye.greet();
sumeyye.calcAge();


//Arguments keyword
const addExpr = function (a,b) {
    console.log(arguments);
    return a+b;
}
addExpr(2,5);

const addArrow = (a,b) => a + b;

//--------------------//

