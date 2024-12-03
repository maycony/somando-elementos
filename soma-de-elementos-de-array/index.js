const arr = [1, 2, 3, 4, 5]

const soma = arr.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0)

console.log(soma)


