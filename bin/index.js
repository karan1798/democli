#! /usr/bin/env node
// console.log("Hello World!");

const packages=require("../package.json")



let packages_arr=[]
let sum;

for(let i of Object.keys(packages.dependencies)){
    let pakageDetails={
        name:"",
        version:""
    }
    pakageDetails.name=i;
    pakageDetails.version=packages.dependencies[i]
    packages_arr.push(pakageDetails)
}
function add(a,b){
    // console.log("Sum is->>",a+b);
    sum=a+b
    return sum
}

let sumOfTwo=add(2,3)

console.log("sum is->>",sumOfTwo);

console.table(packages_arr);