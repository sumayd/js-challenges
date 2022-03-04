//--------------------//
'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//destructuring arrays
const weekdays = ['mod', 'tue', 'wed','thu', 'fri', 'sat','sun'];
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()){
  console.log(`${i + 1} : ${el}`);
}

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

