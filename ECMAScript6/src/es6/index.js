function newFuction(name,age,country){
    var name = name || 'carlos';
    var age = age || 23;
    var country = country || 'COL';
    console.log(name, age, country)
}
newFuction('carlos mario', 23, 'colombia')


let hello = "hola";
let world = "mundo";

// concatenar es5
let epicHelloWorld = hello +' '+ world;
console.log(epicHelloWorld)

//concatenar con es6 comillas francesas 
let epicHelloWorld2 = `${hello} ${world}`;
console.log(epicHelloWorld2)

//declaracion de funciones es6
function newFuction2(name='carlos', age = 23, country = 'COL'){
    console.log(name, age, country);
}

newFuction2('carlos mario gomez', 23, 'CO')


let name = "carlos";
let age = 23;

//es5
let obj = {name:name, age:age}
//es6
let obj2 = {name, edad}
console.log(obj2)

//arrays

const names = [
    {name:'carlos', age:23},
    {name:'mario', age:23}
]

let listName = names.map(function(item){
    console.log(item.name)
})

//arrow function o funcion anonima

let listName2 = name.map((item) => console.log(item.name))

const lisName3 = (name, age, country) =>{
// lo que necesite hacer 
}

const listName4 = (item) =>{
// lo que necesite !! 
}

//obviando el return
const square = num => num * num ;

//  Promesas
 
const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Todo bien')
        } else {
            reject('pailas !! ')
        }

    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('algo !! '))
    .catch(error => console.log(error))

//clases POO

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2))

// Modules import y export
import hello from './module'

hello()

//generador
function* helloWorlde(){
    if(true){
        yield 'hello';
    } 
    if(true){
        yield 'world';
    }
};

const generadorHello = helloWorlde()
console.log(generadorHello.next().value);
console.log(generadorHello.next().value);
console.log(generadorHello.next().value);

// objetos, matrices Es8
const data = {
    frontend:'carlos',
    backend:'christian',
    scrumMaster:'juliana',
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// obtener solo los valores
const values = Object.values(data)
console.log(values)

// añadir valores a una cadena
const string = 'hola'
//add al inicio padStart(numero de caracteres, lo que agregas)
console.log(string.padStart(7,'hi'))

//add al final padEnd(numero de caracteres, lo que agregas)
console.log(string.padEnd(12,'-----'))


// async Await

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true) 
        ? setTimeout(()=>resolve('todo bien'), 3000)
        : reject(new Error('error'))
    })

}

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync()


