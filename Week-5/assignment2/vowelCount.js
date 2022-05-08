/** Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string. **/



function vowelCount(char){
    const vowel = 'aeiou'; 
    
    let countVowelMap = new Map();
    const lowerCaseChar = char.toLowerCase();

    for(var i=0; i<lowerCaseChar.length; i++){
        if(vowel.includes(lowerCaseChar[i])){ //check if aeiou has perticular char
                let matchedVowel = lowerCaseChar[i]; //getting that matched char of vowel
                if(countVowelMap.has(vowel.indexOf(matchedVowel))){ //then check matched char's index from vowel
                    countVowelMap.set(vowel.indexOf(matchedVowel), countVowelMap.get(vowel.indexOf(matchedVowel)) + 1); //char's index from "vowel" will be key
                }
                else {
                    countVowelMap.set(vowel.indexOf(matchedVowel), 1); 
                }
                
            }
        
    }
    return countVowelMap;
}

const vowel = vowelCount("aeaaiioiu");
console.log(vowel); //Map(5) { 0 => 3, 1 => 1, 2 => 3, 3 => 1, 4 => 1 }