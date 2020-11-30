// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// Very very very confusing! I started by creating a funcion that takes an array as an argument.
const shuffle = (array) => {
    //if array is empty
// Then I set my if statement when my array is empty, you can set it equal to 0, [],or ""
    if (array=== 0) {
        return "The array is empty."
// Now I can start working on the very very very confusing part.
// Start by using .shift(), this method removes the first element from an array and returns that removed element when called, but we don't want that.
    } else {
        array.shift()
// Set a basic for lop, 
        for (let i=0; i<array.length; i++) {
// Now the hard part-creating a local variable that will find a random index and suffle my array. 
// Math.floor(Math.random()) will return a random integer from my array.
// https://dirask.com/posts/JavaScript-Math-random-explain-the-difference-between-Math-ceil-vs-Math-floor-vs-Math-round-aDZQd1
                randIndex = Math.floor(Math.random()*array.length)
// Now this is actually the hard part...
//switch the position of value at random index with the value at i
// create a new local variable that will hold my array and randInex
                temp = array[randIndex]
                array[randIndex] = array[i]
                array[i] = temp
            }
        return array
    
    }
}

// console.log(shuffle(collections))
// console.log(shuffle(collections))
// console.log(shuffle(collections))
// console.log(shuffle(collections))
// console.log(shuffle(collections))


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.


var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
// Start by creating a function that takes in an array as an argument

const cubeNumbs = (array) => {
// create a local variable that holds out incomming data
    let start = 0
// use a map to go through our array and cube each value, then add those values together
    array.map(value => {

     start = start + value **3 
}) 

return start
}

// console.log(cubeNumbs(cubeAndSum1));





// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// so far my favorite, love this method

const myFunction = (array) => {
    let max = (Math.min(...array))
    let min = (Math.max(...array))
    return [max,min]
}  

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// console.log(myFunction(nums1))
// console.log(myFunction(nums2))






// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.
// https://stackoverflow.com/questions/43192205/making-every-other-letter-capitalized

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


const firstLettUpp = (string) => {
  let output = ""
  for (i=0; i < string.length; i++) {
     output  += ! (i % 2 == 0) ? string.charAt(i).toUpperCase() : string.charAt(i);
  }
  return output 
}


// console.log(firstLettUpp(testString1))

// console.log(firstLettUpp(testString2))


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// create a function that takes two arrays as an argument and return one array with the two arrays combined and no duplicates 

const noDupes = (arr1, arr2) => {
    // lets create a local variable that will hold our new arrat
    let singleArray = new Set ([...arr1,...arr2]) 
    
    return [...singleArray]
}
// console.log(noDupes(arr1,arr2));