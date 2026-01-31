//const add = (a,b)=>{
    /*
exports.add = (a,b)=>{
    return a+b
}
//console.log(add(12,10))


//const sub = (a,b)=>{
exports.sub = (a,b)=>{
    return a-b
}
//console.log(sub(12,10))

//module.exports = add
//module.exports = sub   ; only 4 single export

module.exports ={
    add,
    sub
}
*/

//!esm
const add = (a,b)=>{
    return a+b
};
export const sub = (a,b)=>{
    return a-b
};

//named import/export

//default
export default add