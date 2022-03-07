let name = "daco"
let age = 12

// old, 변수로 객체 생성
let personOld = {name:name, age:age}
console.log(personOld)
// { name: 'daco', age: 12 }


// new, 단 변수명과 키 값이 일치할 경우에 사용
let personNew = {name,age}
console.log(personNew)
// { name: 'daco', age: 12 }

// -----------------------------


// old, 객체 꺼내 변수 할당
let daco = {
    x : 500,
    y : 180
}
let a = daco.x
let b = daco.y
console.log(a,b)

// new, 단 키와 변수명이 일치하지 않으면 undefined 반환
let {x,y} = daco
console.log(x,y)