//Data types
let name="Emmanuel" //strings

let age = 27 //number

let z = null //null

let y = undefined //undefined

let isMarried = true

console.log(name);

console.log(typeof y);

console.log (typeof isMarried);

let faveColor = ["Blue", "orange", "Green", "Lemon", "Yellow", "White"] //array

let X = "Hello world!" //string
console.log (X.toUpperCase())
console.log (X.toLowerCase())
console.log (X.length)

//concatenation
let m = "I Am"

let n = "I go to PwC bootcamp"

let p = "I love to learn Javascript"


console.log (m + " " + name +","+n +" "+ "and" + " "+p)

console.log(`${m}  ${name} , ${n} and ${p}`)

console.warn("This is a warning")
console.error ("This is an error")

let fruit =["apple", "orange", "banana"]
fruit.push("Grape")
fruit.push("strawberry")
fruit.pop()
fruit.shift()
fruit.unshift("Waterlemon")
fruit[4]="Mangoe"
console.log(fruit)

const person ={
    name :"Emmanuel",
    age : 27,
    hobbies :["sport", "movies" "internet surfing"],
    height :6,
    weight:50,
    isMarried :false,

    greeting: function() {
        console.log('hello world')
    }
}
    console.log(person.name)
    
    









