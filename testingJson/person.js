const fs = require('fs')
const person = {
    name: 'Mohammed',
    age: 27,
}

const personJSON = JSON.stringify(person)



fs.writeFileSync('person.json', personJSON)

const dataBuffer = fs.readFileSync('person.json')

const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)

console.log(data.age)