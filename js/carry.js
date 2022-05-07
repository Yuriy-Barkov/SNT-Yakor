// import Modal from "./modules/Modal/Modal"

window.onload = function () {

};

console.log("page carry.js loaded")

function sum(a, b, c) {
    return a+b+c
}

function multi(a,b,c) {
    return a*b*c
}

function curry(fn) {
    return function curried(...args){
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        }

        return curried.bind(this, ...args)
    }
}

const curriedSum = curry(sum)
const curriedMulti = curry(multi)

// console.log(curriedSum(2)(1)(3))
// console.log(curriedSum(2,1)(3))
// console.log(curriedSum(2)(1,3))
