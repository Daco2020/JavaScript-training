// 랜덤번호 지정
// 유저가 번호를 입력한 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down !!
// 랜덤번호가 > 유저번호 up !!
// reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 입력 불가, 버튼 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다.


let computerNum = 0
let playButton = document.getElementById("play_button"); //document는 html을 뜻한다.
let userInput = document.getElementById("user_input"); // 유저가 입력한 숫자
let resultArea = document.getElementById("result_area"); // 결과 메시지
let resetButton = document.getElementById("reset_button") // 리셋 버튼
let chances = 5 // 남은 기회
let gameOver = false // 게임오버 여부
let chanceArea = document.getElementById("chance_area") // 남은 기회 메시지
let history = [] // 유저가 입력한 숫자를 담아둘 배열

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value = ''}) // focus 커서가 인풋창에 닿았을 때 // 익명 function은 일부에서만 잠깐 사용할 경우

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;
    let valid = validator(userValue) // 유효성 검사

    if (valid){
        return valid
    }

    chances -- ;
    chanceArea.textContent = `남은 기회 ${chances}번`;
    console.log("chances", chances)

    if(userValue < computerNum){
        resultArea.textContent = "UP!!"
    } else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!"
    } else {
        resultArea.textContent = "GOOD!!"
        gameOver = true
    }

    history.push(userValue)
    console.log(history)

    if (chances < 1){
        gameOver = true
    }

    if (gameOver == true){
        playButton.disabled = true
    }
}

function reset() {
    // user input창이 깨끗하게 정리된다.
    userInput.value = "";
    // 새로운 번호가 생성된다.
    pickRandomNum();
    playButton.disabled = false
    chances = 5
    gameOver = false
    resultArea.textContent = "정답이 리셋되었습니다."
    chanceArea.textContent = `남은 기회 ${chances}번`
    history = []
}

function validator(userValue) {
    if (userValue < 1 || userValue > 100){
        return resultArea.textContent = "1과 100사이 숫자를 입력해 주세요."
    }

    if (history.includes(userValue)){
        return resultArea.textContent = "이미 입력하였습니다."
    }
}

pickRandomNum();