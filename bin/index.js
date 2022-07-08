#! /usr/bin/env node
// console.log("Hello World!");

const packages=require("../package.json")



let packages_arr=[]

for(let i of Object.keys(packages.dependencies)){
    let pakageDetails={
        name:"",
        version:""
    }
    pakageDetails.name=i;
    pakageDetails.version=packages.dependencies[i]
    packages_arr.push(pakageDetails)
}
console.table(packages_arr);