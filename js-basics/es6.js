// //let const
// //template literals
// // ``
// //destructuring
// let user = {
//     name: 'Abc',
//     Email:'abc@gmail.com',
//     age:27
// }
// //let user_email = user.name
// // let name =''
// // let {name:user_name, Email, age} = user
// // console.log(user_name, Email, age)

// // let arr = [1,2,3,4,5]
// // let [a,b,c] = arr

// //! spread & rest operator(...)

// //rest 
// // let {name,...rest} = user
// // //let [a,...b] = arr
// // console.log(rest)
// // console.log(b)

//
// // const add =(...numbers) =>{
// // //return a+b+c
// // console.log(numbers)
// //     return numbers.reduce((acc, val) => {
// //         return acc= acc + val
// //     }, 0)
// // }

// // console.log(add(1,2,3))
// // console.log(add(1,2,3,4,5,6,7,8,9))

// // //spread (...)
// // let arr = [1,2,3,4,5]
// // console.log(arr)
// // console.log(...arr)
// // let arr2 = [...arr]
// // console.log(arr2)

// // let user ={
// //     name:'ABC',
// //     email:'email@gail.com',
// //     age:21
// // }
// // let user1={password:'12345',...user}
// // console.log(user1)


// //arr ko maximum value get garna lai

// // console.log(Math.max(12,34))

// console.log(Math.max(...arr))

// //async

// //!timers
// console.log('start');

/*
const timer_id=setTimeout(()=>{
console.log('processing');
},2000);
clearTimeout(timer_id);

*/

//fetch
const fetchpost=async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/45')
        const data = await response.json();
        console.log(data)   
    } catch (Error){
        console.log('error hai')
    } finally{
        console.log('finally')
    }
}
fetchpost()
