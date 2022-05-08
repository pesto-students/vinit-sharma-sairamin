/** Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string. **/


function countVowel(char){
    const vowel = 'aeiou'; 
    
    let countVowel = new Map();
    const lowerCaseChar = char.toLowerCase();

    for(var i=0; i<lowerCaseChar.length; i++){
        for(var j=0; j<vowel.length; j++){
            if(vowel[j] === char[i]){
                if(countVowel.has(j)){      
                    let mapVal = countVowel.get(j);
                    countVowel.set(j, mapVal + 1);
                }
                else {

                    countVowel.set(j, 1);
                }
                
            }
        }
    }
    return countVowel;
}

const vowel = countVowel("aeaaiioiu");
console.log(vowel); //Map(5) { 0 => 3, 1 => 1, 2 => 3, 3 => 1, 4 => 1 }


