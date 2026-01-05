const tinderUser = {}
tinderUser.id = 1,
tinderUser.email  = "sanas@gmail.com",
tinderUser.isLoggedin = 'false'

const regularUser ={
    username : {
        fullName : "Sana",
        lastName : "Khan"
    },
    email : "Sana@gmail.com",
    Addres : "xyz",
    city : "Multan"
}
// console.log(regularUser.username)

const obj1 = { a: '1', b : "2"}
const obj2 = { c : '3', d : '4'}
const obj4 = { e : '5', f : '6'}
// const obj3 = Object.assign({}, obj1,obj2,obj4) 
// const obj3 = {...obj1, ...obj2, ...obj4 }
const obj3 =  { obj1 , obj2, obj4}
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedin'))  // check krta ha k is ki apni property ha ya ni


const course = {
    coursename : "ABC",
    price : 230,
    courseInstructor : "sana"
}

const {courseInstructor : Instructor} = course
// console.log(courseInstructor)
console.log(Instructor)