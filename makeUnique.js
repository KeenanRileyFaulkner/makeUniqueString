// Write your solution below:
const makeUnique = (string) => {
    let mySet = new Set();
    let answer = "";
    for(let char of string) {
        mySet.add(char);
    }
    mySet.forEach(char => answer += char);
    return answer;
}

console.log(makeUnique('helloworld'));
console.log(makeUnique('iwanttoclimbamountain'));