// a space for your code along notes 🏄‍♀️

let myFruits = ['banana', 'mango', 'apple', 'pear', 'strawberry', 'raspberry'];
myFruits.push('blackberry');
console.log(myFruits);

// for each: does the same thing as for loop 
myFruits.forEach(function(fruit){
    console.log(fruit)
});

//DIY for each
function myForEach(array, callback){
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

myForEach(myFruits, function(fruit) {
    console.log(fruit)
}); 

//Map
let myFavoriteFruit = myFruits.map(function(fruit) {
    return "One of my favorite fruits is " + fruit
});

console.log(myFavoriteFruit);