// //JavaScript Fundamentals – Part 1
// //Coding Challenge #1

// let markHeight = 1.88;
// let markWeights = 95;
// let johnHeight = 1.76;
// let johnWeights = 85;

// console.log("Marks weights " + markWeights + " kg and is " + markHeight + " m tall. John weights "  + johnWeights + " kg and is " + johnHeight +
//     " m tall.")
// //BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// let markIbm = markWeights / (markHeight * markHeight);
// let johnIbm = johnWeights / (johnHeight * johnHeight);

// console.log(johnIbm + "," + markIbm);

// let markHigherBMI = markIbm > johnIbm

// console.log(markHigherBMI)

// //Coding Challenge #2

// if(markHigherBMI){
//     console.log("Mark's BMI is higher than John's!")
// } else {
//     console.log("John's BMI is higher than Mark's!")
// }

// console.log(`Mark's BMI ${markIbm} is higher than John's ${johnIbm}`)

// //Coding Challenge #3

// let dolphis1 = (96 + 108 + 89) / 3
// let dolphis2 = (97 + 112 + 101) / 3
// console.log("dolphis average: " + dolphis2)

// let koalas1 = (88 + 91 + 110) / 3
// let koalas2 = (109 + 95 + 123) / 3
// let koalas3 = (109 + 95 + 106) / 3
// console.log("koalas average: " + koalas2)

// // if(dolphis1 > koalas1){
// //     console.log(`Winner Team dolphins ${dolphis1} point.`)
// // } else if (dolphis1 === koalas1){
// //     console.log(`draw status ${koalas1} point.`)
// // }
// // else{
// //     console.log(`Winner Team koalas ${koalas1} point.`)
// // }

// if(dolphis2 > koalas2 && dolphis2 >= 100){
//     console.log(`Winner Team dolphins ${dolphis2} point.`)
// } else if (koalas2 > dolphis2 && dolphis2 >= 100){
//     console.log(`Winner Team koalas ${koalas2} point.`)
// }else if (koalas2 === dolphis2 && dolphis2 >= 100 && koalas2 >= 100 ){
//     console.log(`draw status .`)
// }
// else{
//     console.log(`no team wins the trophy`)
// }

// //Coding Challenge #4
// let bill = 275
// let tip = bill <= 300 && bill >= 50 ?  bill * 0.15 : bill * 0.2
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)


// //JavaScript Fundamentals – Part 2

// //Coding Challenge #1

// const calcAverage = (a,b,c) => (a + b + c) / 3;

// //test Data 1
// let scoreDolphins = calcAverage(44,23,71)
// let scoreKoalas = calcAverage(65,54,49)
// //test Data 2
// scoreDolphins = calcAverage(85,54,41)
// scoreKoalas = calcAverage(23,34,27)

// const checkWinner = function(avgDolhins, avgKoalas) {
//     if(avgDolhins >= 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolhins} and ${avgKoalas})`)
//     }else if(avgKoalas >= 2 * avgDolhins){
//         console.log(`Koalas win (${avgDolhins} and ${avgKoalas})`)
//     }else{
//     console.log("no team win")
//     }
// }
// checkWinner(scoreKoalas,scoreDolphins)

// //Coding Challenge #2

// let bills = [125, 555, 44]
// const calcBill =  bill => bill <= 300 && bill >= 50 ?  bill * 0.15 : bill * 0.2

// let tips = [calcBill(bills[0]), calcBill(bills[1]), calcBill(bills[2])]

// console.log(`Tips: ${tips}`)

// let totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]

// console.log(`Total: ${totals}`)

// // Coding Challenge #3

//     const mark = {
//         firstName : 'Mark',
//         lastName : 'Miller',
//         weights : 78,
//         height : 1.69,
//         calcBMI : function () {
//             this.bmi = this.weights / (this.height * this.height)
//             return this.bmi;
//         }
//     };

//     const john = {
//         firstName : 'John',
//         lastName : 'Smith',
//         weights : 92,
//         height : 1.95,
//         calcBMI : function () {
//             this.bmi = this.weights / (this.height * this.height)
//             return this.bmi;
//         }
//     };

//     console.log(john.calcBMI() + "," + mark.calcBMI())

//     if(mark.bmi > john.bmi){
//         console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName}'s (${john.calcBMI()})!`)
//     } else if (john.bmi > mark.bmi){
//         console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.calcBMI()})!`)
//     } else {
//         console.log("Same BMI")
//     }
 
// Coding Challenge #4

// let calcBill =  bill => bill <= 300 && bill >= 50 ?  bill * 0.15 : bill * 0.2


// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++ ){
//     tips.push(calcBill(bills[i]))
//     totals.push(calcBill(bills[i]) + bills[i])
// }

// console.log(`Tips : ${tips}`)
// console.log(`Total : ${totals}`)

//Bonus Challenge

// let arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// calcAverage = function (arr) {
//     let sum = 0;
//     for(i = 0; i < arr.length; i++){
//        sum += arr[i]
//     }
//     return sum / arr.length
// }

// console.log("Avarage: " + calcAverage([2,3,7,21]))

// Coding Challenge Developer Skills & Editor Setup
 const printForecast = function(arr){
    for(let i = 0; i < arr.length; i++){
    let temp = String(arr[i])
     console.log(`${temp}'ºC in ${i +1} days`)
    }
}
printForecast([17, 21, 23])

