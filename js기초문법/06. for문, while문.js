// i=i+i == i++ == i+=1
// for - 배열과 찰떡궁합(범위가 정해져 있을 때)
for(let i = 0; i < 10; i++){
    console.log("DACO", i)
}

// 짝수만 출력하고 싶을 때.
for(let i = 0; i < 10; i+=2){
    console.log("DACO", i)
}

// 이중 for문
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(i+'*'+j+'='+i*j)
    }
}

// // while문 - 특정 상태일 때 반복하기 위하여 쓰임
// let boolean = true
// while(boolean == true){
//     console.log("while문 실행", true)
// }

let int = 1234
int.toString() // 문자로 바꾸어줌
console.log(int)


// 369 로직
for(let i=1;i<=50;i++){
    let stringValue = i.toString()
    let result = ""
    for(let j=0;j<stringValue.length;j++){
      if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
        result+="짝"
      }
    }
    console.log(result.length>0?result:i)
  }