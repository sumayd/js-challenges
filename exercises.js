//--------------------//
'use strict';

//destructuring arrays
const weekdays = ['mon', 'tue', 'wed','thu', 'fri', 'sat','sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian' , 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    hours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex, mainIndex, time, address }) {
        console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(
          `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
      },
    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};

//properties NAMES
const properties = Object.keys(hours);
// console.log(properties);
let openStr = `We are open ${properties.length} days: `;
for ( const day of properties ){
  openStr += `${day}, `;
}
// console.log(openStr);
//properties VALUES
const values = Object.values(hours);
// console.log(values);

const entires = Object.entries(hours);
// console.log(entires);
for (const x of entires){
  // console.log(x);
}

for (const [day , {open, close}] of entires) {
// console.log(`On ${day} we open at ${open} and close ${close}`);  
}
//EXAMPLE
// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for (const day of days){
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//METHODS
// console.log(restaurant.order?.(0,1) ?? 'Method doesnt exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method doesnt exist');

//ARRAYS
const users = [{
  name : 'Sümeyye',
  email : 'sumeyye.aydemir@gmail.com'
}];
// console.log(users[0]?.name ?? 'User array empty');
// if(restaurant.hours.mon && restaurant.hours.mon) console.log(restaurant.hours.mon.open);

// //with optional chaining
// console.log(restaurant.hours.mon?.open);
// console.log(restaurant.hours?.mon?.open);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()){
//   console.log(`${i + 1} : ${el}`);
// }

// console.log(...menu.entries());
// restaurant.orderPizza('mushrooms' ,'onion' , 'olives' , 'spinachh');
// restaurant.orderPizza('mushrooms')

//Logical Assignment Operators
// const rest1 = {
//     name: 'Capri',
//     numGuest: 0,
// };
// const rest2 = {
//     name: 'La Piaz',
//     owner : 'Givani Rossi',
// };

//Nullish Coalescing Operator (??)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// The logical AND assignment
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// The logical OR assignment
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// console.log(rest1);
// console.log(rest2);
//FUNCTIONS
// const add = function(...numbers) {
//     let sum = 0;
//     for (let i= 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// };

// add(2,5);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);


//SPREAD, because an RIGHT side of =
// const arr = [1,2, ...[3,4]];
//REST because an LEFT side of =
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);

// const [pizza, risotto , ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu
// ];
// console.log(pizza,risotto,otherFood);

//objects
// const { sat, ...weekdays} = restaurant.openingHours;
// console.log('Open days:', weekdays);


//real example
// const ingredients = [
//     prompt('Let\'s make pasta Ingredient 1?'),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?')
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//objects
// const newRestaurant = { foundedIn: 1994, ...restaurant, founder : 'Founder'};
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Turkey Meal';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// restaurant.orderDelivery({
//     time: '22:30',
//     address : 'Turkey, Kocaeli',
//     mainIndex : 2,
//     starterIndex: 2,
// });


//spread...
// const str ='Sümeyye';
// const letters = [...str, ' ' , 'S.'];
// console.log(letters);
// console.log(...str);
// const {name , openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName, 
//     openingHours: hours, 
//     categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [] , starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// const { fri } = openingHours;
// console.log(fri);
// const { 
//     fri : {open :o , close : c} ,
// } = openingHours;
// console.log(o, c);


// let [main, , secondary] = restaurant.categories;
// console.log(main ,secondary);

// receive 2 return values form a function
// const [starter, main]= restaurant.order(2,0);
// console.log(starter, main);

// const nested = [2,4, [5,6]];
// const [i , ,j] = nested;
// console.log(i,j);

// const [i,  , [j, k]] = nested;
// console.log(i,j,k);

//default values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p ,q, r);



//--------------------//

//Quiz app
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
// console.log(question);


// console.log(question.get('question'));

for( const [key, value] of question){
  if( typeof key === 'number'){
    // console.log(`Answer ${key} : ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);


// console.log(question.get(question.get('correct') === answer ));

//convert map to array
// console.log([...question]);

// console.log([...question.keys()]);
// console.log([...question.values()]);
// console.log([...question.entries()]);


////////////////////
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// _Delayed_Departure;fao93766109;txl2133758440;11:25
// _Arrival;bru0943384722;fao93766109;11:45
// _Delayed_Arrival;hel7439299980;fao93766109;12:05
// _Departure;fao93766109;lis2323639855;12:30
const code = str => str.slice(0, 3).toUpperCase();
for ( const flight of flights.split('+')){
  const [type , to, from , time ] = flight.split(';');
// console.log({type}, {to}, {from}, {time})
const toCode = code(to);
const fromCode = code(from);
const timeStr = `${time.replace(':' , 'h')}`;
const typeStr = `${type.replaceAll('_' , ' ').trim()}`;
const outPut = `${typeStr.startsWith('Delayed') ? '🔴' : ' '} ${typeStr} from ${toCode} to ${fromCode} (${timeStr})`.padStart(50);
// console.log(outPut)
}

//--------------------//

// const oneWorld = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
  
// }
// const upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`)
//   console.log(`Transformed string: ${fn(str)}`)
//   console.log(`Transformed by: ${fn.name}`)
// }
// transformer('Javascript is the best!', upperFirstWord);

// const high5 = function () {
//   console.log('BYE');
// };

// document.body.addEventListener('click' , high5);

//////
// const greet  = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`)
//   }
// }

// const greeterHey = greet('hey')
// greeterHey('Jonas')
// greeterHey('Steven')

// greet('hello')('honas')

//arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`)

// greetArr('hii')('tommm')


const luftansa = {
  airline : 'Luftansa',
  iataCode: 'LH',
  bookings : [],
  book (flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNumber}` , name});
  },
}
// console.log(luftansa)
luftansa.book(239, 'dhsjf djfbsjkf')
luftansa.book(343, 'dkfjskfd skdfjof')

const eurowinfs = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

const book = luftansa.book
//call method
book.call(eurowinfs, 23 , 'Sümeyye')

book.call(luftansa, 244, 'Aydemir')


const swiss = {
  name: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: []
}

//apply method
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)

book.call(swiss, ...flightData)

//bind

const bookEw = book.bind(eurowinfs)
const bookLF = book.bind(luftansa)

bookEw(12, 'Sümeyye Aydemir')
bookLF(25, 'Şulenur Aydemir')

const bookEW23 = book.bind(eurowinfs , 23868)
bookEW23 ('John Cak')
bookEW23 ('Marry Kie')

// with event listeners
luftansa.planes = 300;

luftansa.buyPlane = function () {
  console.log(this)
   this.planes++;
  console.log(this.planes)
}

document
  .querySelector('.buy')
  .addEventListener('click', luftansa.buyPlane.bind(luftansa));

  //partial app

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVat = addTax.bind(null, 0.23)
console.log(addVat(100))


////

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};




