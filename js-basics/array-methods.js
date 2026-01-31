const number = [1, 2, 3, 4, 5];
//! foreach
//arr.forEach(callback)
const callback = (value,index,arr) =>{
console.log('value', value)
console.log('index', index)
console.log('arr', arr)
}

number.forEach(callback)
number.forEach((value,index,arr) =>{
    console.log('value', value)
    console.log('index', index)
    console.log('arr', arr)
})

//let res = number.forEach(callback)
number.forEach((value,index) =>{
    console.log(index)
})
//! map
let res = number.map((value,index,arr) =>{
    return 'x'
})
console.log(numbers)
console.log(res)

//!filter
number.filter
//reduce(()=>{})
reduce