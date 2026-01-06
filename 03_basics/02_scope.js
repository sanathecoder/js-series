// var c = 200
const a = 2000
if(true){
    let a = 20
    const b = 30
    // var c = 40
    // console.log('Inner :', a)
}
// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "Sana"
    function two(){
        const website = 'sanawesite.com'
        console.log(username)
    }
    two()

}
// one()



function Addone(num){
    return num + 1
}

console.log(Addone(5))

const Addtwo = function(num){
    return num + 2
}

console.log(Addtwo(5))