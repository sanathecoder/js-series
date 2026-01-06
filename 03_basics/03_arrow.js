const user = {
    name : "sana",
    price : 20,
    WelcomeMessage : function(){
        console.log(`${this.name} , welcome to the website`)
        console.log(this)
    }

}
// user.WelcomeMessage()
user.name = 'saam'
// user.WelcomeMessage()

// function chai(){
//     let username = 'Hitesh'
//     console.log(this.username)
// }
// chai()


// const chai = () => {
//     let username = 'Hitesh'
//     console.log(this.username)
// }
// chai()


// const AddTwoNum = (num1,num2)=>{
//     return num1 + num2
// }

// const AddTwoNum = (num1,num2)=>  ( num1 + num2)

const AddTwoNum = (num1,num2)=>  
     num1 + num2

console.log(AddTwoNum(2,3))