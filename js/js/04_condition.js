var currentYear = 2022;
var birth = 1994;
var age = currentYear - birth + 1;

/*
    if : ()안의 조건문이 true일 때 실행되고, false인 경우 실행 x
    else if : if문의 조건이 false 경우 else if의 조건을 확인 후 true이면 실행
    else : 모든 조건이 해당하지 않을 때 무조건 실행 => 필수 x 조건 필요 x

    논리 연산자를 통해서 정확한 조건을 작성
*/
if (age >= 30 && age < 40) {
  console.log("30대입니다");
} else if (age >= 20 && age < 30) {
  console.log("20대입니다.");
} else {
  console.log("30대도 20대도 아닙니다.");
}

/*
    address의 값이 서울, 인천, 경기 중 하나라면 수도권에 살고 있습니다를 출력
    그렇지 않은 경우 지방에 살고 있습니다를 출력
*/
var address = "인천";
if (address === "서울" || address === "인천" || address === "경기") {
  console.log("수도권에 살고 있습니다.");
} else {
  console.log("지방에 살고 있습니다.");
}

/*
    변수 num의 값이 짝수라면 짝수입니다 출력
    홀수라면 홀수입니다 출력
    힌트 : 짝수의 정의? => 2로 나누어 떨어지는지?
*/
var num = 4;
if (num % 2 === 0) console.log("짝수입니다.");
else console.log("홀수입니다.");

console.log("-------------------");

/* 
    swich : ()안의 값을 각 case 값과 비교하여 해당 하는 case를 실행
    break : 탈출. break를 하지 않으면 해당하는 case 이후의 case를 모두 실행(default 포함).
    default : 기본으로 실행되는 코드.
*/

var data = "ads";
switch (typeof data) {
  case "string": {
    console.log("string 타입입니다.");
    break;
  }
  case "number": {
    console.log("number 타입입니다.");
    break;
  }
  case "boolean": {
    console.log("boolean 타입입니다.");
    break;
  }
  default: {
    console.log("모두 해당하지 않습니다.");
  }
}

/*
    switch문 연습 문제

    점수가 90점 이상이면 A등급입니다.
    89~80 : B등급입니다. 출력
    79~70 : C등급입니다. 출력
    69~60 : D등급입니다. 출력
    그 이외는 F등급입니다. 출력

    힌트 : switch 문은 조건식이 아니라 값끼리 비교를 한다.
*/

var score = 100;

switch (parseInt(score / 10)) {
  // case 10의 break문을 생략하여 case 9와 같은 코드가 실행되게 작성
  case 10:
  case 9:
    console.log("A등급입니다.");
    break;
  case 8:
    console.log("B등급입니다.");
    break;
  case 7:
    console.log("C등급입니다.");
  case 6:
    console.log("D등급입니다.");
    break;
  default:
    console.log("F등급입니다.");
}
