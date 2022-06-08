//Problem 8.5: Find the Town Judge


//finding the twon judge
function findJudge(n, trust){
    if(n===0 && trust.length===0) return 1;
    let iTrust={};
    let otherTrust={};
    let townJudge = -1;

    for(let i=0; i<trust.length; i++){
        let trustee=trust[i][0];
        let trusted=trust[i][1];

        iTrust[trustee] = iTrust[trustee] ? iTrust[trustee].concat(trusted):[trusted]
        otherTrust[trusted] = otherTrust[trusted] ? otherTrust[trusted].concat(trustee):[trustee];
    }

    let keyArray = Object.keys(otherTrust);
    for(let i=0; i<keyArray; i++){
        let current = keyArray[i];
        if(otherTrust[current] && otherTrust[current].length==n-1 && !iTrust[current]){
            townJudge = current;
        }
    }

    return townJudge;
};

//testing the above functionality
console.log(findJudge(2, [[1, 2]])); //2
console.log(findJudge(3, [[1, 3], [2, 3]])); //3
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]])); //-1

//time complexity is O(N)
//space complexity is O(N)
