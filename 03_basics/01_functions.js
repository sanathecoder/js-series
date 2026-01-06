// function sayMyname(num1, num2){
//     console.log(num1 + num2)
// }

function TwoNum(num1, num2){
    let result = num1 + num2
    return result

}

// const result = TwoNum(2,3)

// sayMyname(2,3)
// sayMyname(3,"2")

// console.log("Results: ", result )

function LoggedinUserMessage(username = "sam"){
    if(!username){
        console.log('Please enter a username')
        return
    }
    return `${username} just logged in`

}
// console.log(LoggedinUserMessage("sana") )
// console.log(LoggedinUserMessage())



// function CartNum(...num1){
//     return num1
// }

// function CartNum(val1,val2 , ...num1){
//     return num1
// }

// console.log(CartNum(2,2,3,4,5))




const Book = {
    bookname :"julet" ,
    price : 300
}

function handleObject(anyobject){
    console.log( `the book name is ${anyobject.bookname} and price is ${anyobject.price}`)
}

// handleObject(Book)
// handleObject({
//     bookname: 'Sam',
//     price : 3000
// })


const NewArr = [200,300,400]
function getsecondValue(getArr){
    return getArr[1]
}

// console.log(getsecondValue(NewArr))
console.log(getsecondValue([100,200,300]))