let name = {
    a : 1,
    b : 2,
    "c" : 3,
}
// 키를 ""로 묶지 않아도 문자로 인식한다.

console.log(name)
// { a: 1, b: 2, c: 3 }

console.log(name.a)
// 1

console.log(name['a'])
// 1

console.log(name.a = '수정1')
// 수정1

console.log(name['a'] = '수정2')
// 수정2

console.log(name)
// { a: '수정2', b: 2, c: 3 }

// Python과의 차이점은 파이썬은 name["키"] 로 값을 찾을 수 있지만,
// JS는 name.키 로도 값을 찾을 수 있다.