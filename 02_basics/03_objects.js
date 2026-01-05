const UserInfo ={
 name: "Sana",
 "Full Name": "Sana Khan",
 age : 24,
 city: "Multan"
}
UserInfo.email = "sana@gmail.com"

// Object.freeze(UserInfo)
// UserInfo.email = "sana1@gmail.com"
// console.log(UserInfo.name)
// console.log(UserInfo["Full Name"])
console.log(UserInfo)

UserInfo.greeting = function(){
    console.log(`Hello JS User ${this.name}`)
}
console.log(UserInfo.greeting())
