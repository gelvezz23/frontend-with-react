const obj = {
    name:'carlos',
    age:'23',
    country:'CO'
};
// lete {corre despues de el, todo lo que agarra}
let {age, ...all} = obj
console.log(all)

// concatenar objetos destructuracion

const obj = {
    name:'carlos',
    age:23
}

const obj1 = {
    ...obj,
    country:'CO'
}

// finaly
const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? resolve('hola mundo')
        : reject(new Error('error'))

    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('terminado'))

// /(valor del [0 a 9]{va a tener 4 valores})
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-02-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)