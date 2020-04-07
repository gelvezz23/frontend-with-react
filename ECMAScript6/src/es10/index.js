let array = [1,2,3, [1,2,3, [1,2,3]]]

//flat(niveles para ver aplana el array)
console.log(array.flat())

let array2 = [1,2,3,4,5]
//recorre el array flatMap( value => [valor, la operacion])
console.log(array2.flatMap(value => [value, value * 2]))

//elimianr espacios 
let hola = '           hola assdasfa'
console.log(hola.trimStart())
console.log(hola.trimEnd())

//manejar errores de forma opcional
//el error no importa si esta o no

try{

} catch {
    error
}

// conveirte matrices en objetos
let entries = [["name","carlos"],["age",23 ]]
console.log(Object.fromEntries(entries))

//acceso a contenido con Symbol
let mySymbl = 'algo que quiero'
let symbol = Symbol(mySymbl)
console.log(symbol.description)
