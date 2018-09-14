var nameVar = 'Hunter'
var nameVar = 'Jenna'
console.log('nameVar', nameVar)

let nameLet = 'Gus'
nameLet = 'Brady'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

// Block scroping
var fullName = 'Hunter Shinn'

if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName)
}
