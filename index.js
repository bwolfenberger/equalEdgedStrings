// pointer method
// define empty array
// iterate through array with for loop
// set variable for next string
// if first and last letters of two strings are equal
    // add true to array in i position
// else add false
// return array after loop

// assumptions
    // if input array only has one value
        // return [false]
    // spacebar is a char
    // no empty strings

// edge cases
    //

    let resultArray = []
    let words = ["abcd", "abdd", "da", "dd"]
    
    const equalEdgedStrings = (words) => {
        if (words.length <= 1) resultArray.push('false')
        for (let i = 0; i < words.length; i++) {
            let currentWord = words[i]
            let nextWord = words[i+1]
            if (nextWord){
                if (currentWord[0] === nextWord[0] && currentWord[currentWord.length - 1] === nextWord[nextWord.length -1]) {
                    resultArray.push('true')
                } else {
                    resultArray.push('false')            
                }
            }
        }
        console.log(resultArray)
    }
    
    equalEdgedStrings(words)
    
    // # Given an array of strings words, for each consecutive pair of words check if they start and end with the same character.
    
    // # Return a boolean array of length words.length - 1, where ith element is true if words[i] and words[i + 1] start and end with the same character, and false otherwise.
    
    // # Example
    
    // # For words = ["abcd", "abdd", "da", "dd"], the output should be equalEdgedStrings(words) = [true, false, false].
    // # The first character of both words[0] and words[1] is 'a', and last one is - 'd'. So 0th element of the answer is true.
    // # The first character of words[1] is 'a', but the first character of words[2] is 'd'. So 1st element of the answer is false.
    // # The last character of words[2] is 'a', but the last character of words[3] is 'd'. So 2nd element of the answer is false.
    // # For words = ["a", "a"], the output should be equalEdgedStrings(words) = [true].
    // # Input/Output
    
    // # [execution time limit] 4 seconds (py3)
    
    // # [input] array.string words
    
    // # An array of strings consisting of English lowercase letters.
    
    // # Guaranteed constraints:
    // # 1 ≤ words.length ≤ 100,
    // # 1 ≤ words[i].length ≤ 100.
    
    // # [output] array.boolean
    
    // # The array described in the problem statement.
    
    // # [Python 3] Syntax Tips
    
    // # # Prints help message to the console
    // # # Returns a string
    // # def helloWorld(name):
    // #     print("This prints to the console when you Run Tests")
    // #     return "Hello, " + name
    
        
    // def equalEdgedStrings(words):