#! /usr/bin/env node
// console.log("Hello World!");
const path=require('path')
// const packages=require("../package.json")

const currentPath=require(path.join(path.resolve("./"),'./package.json'))

// console.log(currentPath.dependencies);

// let sum;
function packageDep(currentPath){
    // console.log(currentPath);
    let packages_arr=[]

    // let sum;
    for(let i of Object.keys(currentPath.dependencies)){
        let pakageDetails={
            name:"",
            version:""
        }
        pakageDetails.name=i;
        pakageDetails.version=currentPath.dependencies[i]
        packages_arr.push(pakageDetails)
    }
    console.table(packages_arr);    

}
packageDep(currentPath)
exports.add=(a,b)=>{
    // console.log("Sum is->>",a+b);
    // sum=a+b
    console.log(a+b)
}

// let sumOfTwo=add(a,b)

// console.log("sum is->>",sumOfTwo);


// module.exports=add

exports.showPackage=()=>{

}