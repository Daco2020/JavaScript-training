function daco1 () {
    return "hello"
}

let daco2 = () =>  {
    return "bye"
}

let daco3 = () =>  "get out"

console.log(daco1(),daco2(),daco3())


// ----------------

// 화살표 함수는 this가 없다!


let age = 17
let person = {
    name : "daco",
    age : 20,
    getInfo : () => {
        console.log(age) 
        // 전역 age를 가져옴. 
        // 객체 내부 값을 가져오려면 this(윈도우(스코프) 내에)를 사용해야하나 
        // 화살표함수는 this를 사용하지 못함
    }
}
person.getInfo() // 17



let person2 = {
    name : "daco",
    age : 20,
    getInfo : function () {
        console.log(this.age)
    }
}
person2.getInfo() // 20


// ------------
// 함수 활용
function sumNumber() {
    const sum = (a, b)=> a+b
    return sum(40, 10);
}


// 
function sumNumber() {
    let addNumber= (a) => (b) => (c) => a + b + c; // ??
    return addNumber(1)(2)(100);
    
}

console.log(sumNumber())