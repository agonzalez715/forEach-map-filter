/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubledArray = [];//start with empty array since forEach created new array
    arr.forEach(function(value){//applying the forEach method to each element in array
        doubledArray.push( value * 2)//pushing new value with logic added to the array variable we created 
    });
    return doubledArray;//we have to return the new array 
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let evensArray = [];//initiate empty array
    arr.forEach(function(value){//set up for each referencing array, and reference element in array with function 
       if (value % 2 ==0) {
        evensArray.push(value) };//we need an if statement because the modulus % will return a boolean value, and that will not be enough
    });
    return evensArray;//return the new array with the new pushed values 
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let newString = []; //initiate empty array
    arr.forEach(function(str){//apply forEach method
            const firstChar = str.charAt(0);//create variable to reference first character of string
            const lastChar = str.charAt(str.length - 1);//create variable to reference last character of string
            newString.push(firstChar + lastChar);//push the concat of first and last char inot the initialized array 
    });
    return newString;//return the new string
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(function(value){//apply forEach method to the array
        value[key] = value;//we use the value[key] to add a new property to the object. the property key is the value of the key parameter and its value is the value of the 'value' parameter
    });
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   let vowels = ['a', 'e', 'i', 'o', 'u'];//define the vowels
   let vowelCountObj = {};//create object to store the count of each vowel
   let lowerCasedString =  str.toLowerCase();//convert the string to lowercase 

   lowerCasedString.split('').forEach(function(char) {//split the string into characters and loop through each character, split method allows us to seperate the letters of the strings into their own peices and returning an array
    if (vowels.includes(char)) {
        if (char in vowelCountObj) {
            vowelCountObj[char] ++;
        } else {
            vowelCountObj[char] = 1;
        }
    }
   });
   return vowelCountObj;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/
//this will create a new array, forEach changes the original array 
function doubleValuesWithMap(arr) {
    return arr.map(function(val) {//applying the map method
        return val * 2;//applying the logic to the value, in this case doubling the value within the array 
    })
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(value, index){//writing out function for logic
        return value * index;//applying logic to the arguments from the map line above
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(obj) {
        return obj[key];//for each object in the arr array, we are returning the value of the property with the name stored in 'key', this is what will be included in the new array for this element
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(obj){//initializng the map method on the array
        return obj['first'] + ' ' + obj['last'];//referencing the object from the arr array, and extracting the 'first' key, concatenating with the value of the 'last' key
    });
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

//filter creates a new array based on criteria you set 
function filterByValue(arr, key) {
    return arr.filter(function(obj){//initializing the filter method on the array
    return obj.hasOwnProperty(key);//returning the obj within the array that has the key of hasOwnProperty
});
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.find(function(element){//initializng find method
        return element === searchValue;//returning the element that matches the search value of the initial argument 
    });
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    let foundObj = arr.find(function(obj){//calling the find method on the array and goes through each element of the array and applies the function we provide to it and will stop as soon as the function returns 'true'
        return obj[key] === searchValue;//this is the function we are providing, for each objest, it checks if the property with the name 'key' has a value equal to searchValue, if so, it returns true 
    });
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];//define the vowels
    let newStr = str.toLowerCase().split('').filter(function(char){//create new string variable, set to loswercase, make each string an array of letters with split, and then use the filter method to set parameters
        return !vowels.includes(char);//return charachters that are not vowels
    }).join('');
    return newStr;//the new string should be nonvowels only 
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter(function(val){//initiate filter
        return val % 2 !== 0;//return value whos remainder is not 0
    })
    .map(function(val) {//initiate map
        return val * 2; //return the new value multipled by 2
    });
}
