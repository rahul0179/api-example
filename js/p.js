//  call back function 

function welcomeMessage(name, greetFunction) {
    console.log(name)

    greetFunction(name);

}

function greetMorning(n) {
    console.log('good morning', n)
}

//welcomeMessage("Tom hanks", greetMorning)
//  array check 
const num = [1, 2, 3, 4]
//console.log(Array.isArray(num))

function triple(x, y, z) {

}

//function check
/* console.log(typeof triple);
console.log(triple.length);
console.log(typeof triple); */


const isTrue = 'false'
if (!isTrue) {
    console.log('hello')
}
else {
    // console.log('word')
}

function sum(p, q) {
    p + q;
}
const result = sum(2, 3)
console.log(result)