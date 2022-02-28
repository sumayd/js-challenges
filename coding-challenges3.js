//--------------------//
'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//destructuring arrays
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian' , 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery : function ({starterIndex, mainIndex, time, address }) {
        console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address : 'Turkey, Kocaeli',
    mainIndex : 2,
    starterIndex: 2,
});


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