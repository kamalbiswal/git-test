// let count = 0;

// function outerFn(){
//     function innerFn(){
//         const counter = count ++
//         console.log(counter)
//     }
//     return innerFn
// }

// const fn = outerFn();
// console.log(fn)

function outerFn(name){
    function innerFn(){
        const pre = `Hello ${name}`

        console.log(pre);
    }
    return innerFn
}
const fn = outerFn('Kamal')

fn()

let count = 0;

function counterfn(count){
    function countFn(){
        const counter = count++

        console.log(counter);
    }

    return countFn
}


const nFn = counterfn(0);

nFn();
nFn();

