// 1) Sum Zero

// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

let arr = []

const addToZero = (arr) => {
    if(arr.length === 0){
        return console.log(false);
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            let sum = arr[i] + arr[j]
            if(sum === 0){
                return console.log(true); 
            }else{
               console.log(false);
            }
        }    
    }
}

// addToZero(arr)

// RUNTIME: 1 + (1 * n) * (1 * n) + 1 ===> 2 + n^2 ===> O(n^2)


// 2) Unique Characters

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueChars('Monday')); 

// RUNTIME: O(n)


// 3) Pangram Sentence

// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false
     }
    }
   
   return true
}

console.log(pangrams('I like cats, but not mice')); 


// RUNTIME: (1 * n) + 1 ===> O(n)


// 4) Longest Word

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

const findLongestWord = (word) => {
    let wordlengths = []

    word.forEach(e => {
        wordlengths.push(e.length)
    })

    wordlengths.sort((a,b) => b-a)

    return console.log(wordlengths[0])
}

findLongestWord(["hi", "hello", "yes", "no", "assessment", "longest", "hydroflasks", "superlongwordIdontknow"])

// RUNTIME: (1 * n) + (1 * n) ===> n + n ===> O(n)
