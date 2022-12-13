const { it } = require("mocha")

it('nada agora', function() {})

/*
function soma(a, b) {
    return a + b;
}
*/

/*
const soma = function (a, b){
    return a +b
}
*/

/*
const soma = (a, b) => {
    return a + b
}
*/

//const soma = (a, b) => a + b

const soma = a => a + a //Como há só um parâmetro posso não usar o parênteses

const soma = () => 5 + 5

console.log(soma(1, 4))

it('a function test ...', function() {
    console.log('Function', this)
})

it('A arrow test...', () =>{
    console.log('Arrow', this)
})