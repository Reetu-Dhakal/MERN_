//console.log('Hello, World!');

//ivar let const
var a= 10;
let b= 20;
b= 50; 
//console.log(a, b);

const c= 30;
//c =98 //error
//console.log(c);

//data types
//!string
let d ='hello'
let e ="hello"
let f =`${2+2} world`
//console.log(f)

//!number
let g = 29
let h = 45.67
//console.log(g, h)

//!boolean
let i = true
let j = false
//console.log(i, j)

//!undefined
let k;
//console.log(k);

//!null
let l = null
//console.log(l);

//!operators

//*artithemetic
// + - / * ** %
//console.log(2 + 2)
//console.log(2 + "2")
//console.log('Hello'+'World')

//assignmnet
//=  += -= ....
let m = 20
//m +=10 => m = m + 10

//*comparison
// == === < > <= >= != !==
//let x =10
//let y ='10' 

//console.log(x == y)
//console.log(x === y)

//logical 
// &&(And) ||(OR) !(NOT)
let x = true
let y = false
//console.log(x && y) //false
//console.log(x || y) //true
//console.log(!x) //false

//*ternary op.
//condition ? <statement 1> : <statement 2>
let age = 17
let res = age >= 18 ? "Adult" : 'Minor'
//console.log(res)

//object
// {}
/*const person = {
    Name : 'Reetu', //always use : , doesnt support =
    Email : 'reetudhakal63@gmail.com',
    password : '12345',
    age : 34
} */

//* read 
// dot notation
//let name = person.name
//console.log(name,person.email)

// ?bracket notation []
//let key = 'age'
//console.log(person.key)
//console.log(person['password'])

//* add 
//person.age = 27

//* modify
//person.name = 'Ritu'

//delete person.email
//console.log(person)

//!array 
// []
//let numbers = [1,54,6,7,2]

//* Read
//console.log(numbers[1])

//*adding new element
// ? from end index
//arr.push() 
//numbers.push(45,65,12)

//? from start index
//numbers.unshift(0,43,56)

//*remove element
//? from start index
//let first_ele = numbers.shift()
//console.log(first_ele)
//console.log(numbers.shift())

//? from end index
//console.log(numbers.pop())
//console.log(numbers)

//*splice
/*numbers.splice(1,2)
const result = numbers.splice(1,2,76,89,91)
console.log('result', result)
console.log(numbers) */

//!array

//!function
//function function_name(){
    //function body
//}

//function greet (){
//console.log('Hello World')
//}
//greet()
//greet()
//greet()
//greet()

//! Function with parameter & Arguments
//function greet (user= 'Guest'){
    //console.log('Hello ',user)
//}

/*greet()
greet('Ritu')
greet('Sita')
greet('Gita') */

//! Function with return
//function add (a, b){
    //console.log(a + b)
//}
//add(2,3)

//function add (a, b){
  //  console.log(a + b)
    //return a + b
//}
//const result = add(8,3)
//console.log(result)

//! Function Expression
//let x = 40
/*const add = function (a, b){
    return a + b
}

const sum = add(5,10)
console.log(sum)*/

//! Arrow Function
const add = (a, b) => {
    return a + b
}
const sum = add(7,12)
console.log(sum);


//!callback function
const parent = (a) =>{
    console.log('parent')
    console.log(a)
    //a(45)
}
const child = (b) =>{
    console.log('child',b)
    return 400
}
//let x = 30
parent(30)
parent(child);
parent((b)=> {
    console.log('child',b)
    return 400
})
//!higher order function
//!annonymous function

//
const multiplier =(factor) =>{
    const multiply = (b) =>{
        return factor * b
    }
    return multiply
}

const double = multiplier(2)
console.log(double(10))
console.log(double(20))
const multiply_by_5 = multiplier(5)
console.log(multiply_by_5(10))

const hof =(a,b,operation) =>{
    operation(a,b)
}

const addition = (a,b) =>{
    console.log (a + b)
}

hof(12,3, addition)
hof(5,6, (a,b) =>{
    console.log(a * b)
})

//!control flow
//! control statements

//* conditionals
//if
//falsy

//! false, null, undefined , 0 , -0,NaN, '' => False
// [] , {} => True
//let age = 0
/*if ([]){
    console.log('Adult')
}
//if-else
    if(age >= 18){
        console.log('Adult')
    }else if(age >= 13 && age < 18){
        console.log('Teenager')
    }else{
        console.log('Child')
    }

//switch
let day = 3
switch(day){
    case 1 :{
        console.log('Sunday')
        break
    }
default:{
    console.log('Invalid day')
}
}*/
//*loops
//while
//do while
//for
//for(let i =0; i<5; i++){
//    console.log( i)
//}

let user = {
    name : 'Ritu',
    email : 'reetudhakal63@gmail.com',
    age : 34
}

//for in
//for(x in user){
    //console.log(user[x])
//}
//for of
for(value of [10,20,30,40]){
    console.log(value)
}
for(value of 'Hello'){
    console.log(value)
}