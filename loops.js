for (let i=2; i<21; i+=3){
    console.log(i)
}

for (let i=2; i<21; i+=2){
    console.log(i)
}

let someWord ="adamu"
console.log(someWord.split(""))

let sumArray=["a","b","c","d"]
console.log(sumArray.reverse())

function stringToArray (str) {
   arr = str.split("")
   arr.reverse()
   return arr.join("")
    
}
console.log(stringToArray("Emmanuel"))

//let newString = str.split

function isPalindrome(str) {
    let newString = str.split('').reverse().join('')
    if (newString == str) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome('sing'))

function isNum(num){
    let newNum =num.toString()
    return isPalindrome(newNum)
   
}
console.log(isNum(22))

//stringToNumber

let str15 ="15"
    console.log(Number(str15))
 

