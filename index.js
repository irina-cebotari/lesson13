// const camelCaseNamingConventionType = 'str';

// const UPPER_CASE_NAMING_CONVENTION_TYPE = 'str1';

// const Capital = new Object;

// const str = 'str1'
// const str2 = 'str2'

// console.log(str + str2)
// console.log(`some text ${str}  ${str2}`) 

// const num = 4

// console.log(num, typeof num)

// let convertedNum = String(num)

// console.log(convertedNum, typeof convertedNum)

// let convertedStr = Number(convertedNum)

// // console.log(typeof convertedStr, convertedStr)

// console.log(typeof + convertedNum)

// let convertBool = Boolean(num)

// console.log(convertBool)

// const falsy1 = ''

// const falsy2 = 0

// const falsy3 = undefined

// const falsy4 = null

// const falsy5 = NaN

// const falsy6 = false

// console.log(Boolean(falsy1))
// console.log(Boolean(falsy2))
// console.log(Boolean(falsy3))
// console.log(Boolean(falsy4))
// console.log(Boolean(falsy5))
// console.log(Boolean(falsy6))

// const valueOr =  falsy1 || falsy2

// const valueAnd = falsy1 && falsy2

// if(falsy1 && falsy2) {
//     console.log('pass1')
// } else {
//     console.log('pass2')
// }

// const valueTernary = falsy1 || falsy2 ? '1' : '2' 

// console.log(valueTernary)

// if (1) {

//     console.log('if block')

// } else if(2) {

//     console.log('else block')

// } else if(3) {

//     console.log('else 2 block')

// } else {
// console.log('default option')
// }

// const num = 50

// if (num > '100') {
//     console.log('mai mare decat 100')
// } else if (num > '50') {
//     console.log('mai mare decat 50')
// } else if (num > '10') {
//     console.log('mai mare decat 10')
// } else if (num > '1') {
//     console.log('mai mare decat 1')
// }

// if (num>100) {
//     console.log('mai mare decat 100')
// }
// if (num>50 && num<=100) {
//     console.log('mai mare decat 50')
// }
// if (num>10 && num<=50) {
//     console.log('mai mare decat 10')
// }
// if (num>1 && num<=10) {
//     console.log('mai mare decat 1')
// }


// if (num>100) {
//     console.log('mai mare decat 100')
// }
// if (num>50 && num<101) {
//     console.log('mai mare decat 50')
// }
// if (num>10 && num<51) {
//     console.log('mai mare decat 10')
// }
// if (num>1 && num<11) {
//     console.log('mai mare decat 1')
// } - ceva not ok aici

// const str = 'ciocolata'

// switch (str) {
//     case 'ciocolata':
//         console.log('str este ciocolata');
//         break;
//     case 'inghetata':
//         console.log('str este inghetata');
//         break;

//     default:
//         console.log('nici un case potrivit')
// }

const anotimp = 'iarna'

switch (anotimp) {
    case 'vara':
        console.log('este vara')
        break
    case 'toamna':
        console.log('este toamna')
        break
    case 'iarna':
        console.log('este iarna')
        break
    case 'primavara':
        console.log('este primavara')
        break

    default:
        console.log('anotimpul nu a putut fi regasit')
}