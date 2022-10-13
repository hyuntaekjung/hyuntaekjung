var currentYear = 2022;
var birth = 2000;
var age = currentYear - birth + 1;

// if : ()안의 조건문이 true일때만 실행되고, false인 경우 실행되지 않는다.
//  else if : if문의 조건이 false일 경우 else if의 조건을 확인 후 true이면 실행한다.
// else : 모든 조건이 해당하지 않을 때 실행한다.

// 논리 연산자를 통해서 더 정확한 조건을 작성할 수 있다. ||, &&, !

if (age >= 30 && age < 40) {
  console.log("30대 입니다.");
} else if (age >= 20 && age < 30) {
  console.log("30대 미만 입니다.");
} else {
  console.log("30대도 20대로 아닙니다.");
}

// address가 서울, 인천, 경기 중 하나라면 수도권에 살고 있습니다를 출력
// 그렇지 않으면 지방에 살고 있습니다 출력.

var address = "서울";
console.log(address);

if (address === "경기" || address === "인천" || address === "서울") {
  console.log("수도권에 살고 있습니다.");
} else {
  console.log("지방에 살고 있습니다.");
}

var num = 5;
if (num % 2 === 0) console.log("짝수입니다.");
else console.log("홀수입니다.");

console.log("---------------");

/*
swich : ()안의 값을 각case에 비교하여 해당 하는 case를 실행한다.
case : 탈출. break를 하지 않으면 해당하는 case 이후 case를 모두 실행한다.
default : 기본적으로 실행이 된다.
*/

var data = 20;
switch (typeof data) {
  case "string": {
    console.log("string 타입입니다.");
  }
  case "number": {
    console.log("number 타입입니다.");
    break;
  }
  case "boolean": {
    console.log("boolean 타입입니다.");
  }
  default: {
    console.log("모두 해당하지 않습니다.");
  }
}

// 점수가 90점 이상이면 A
// 80~89 B
// 70~79 C
// 60~69 D
// 이외는 F
var score = 100;

switch (parseInt(score / 10)) {
  case 10:
  case 9:
    console.log("A등급입니다.");
    break;
  case 8:
    console.log("B등급입니다.");
    break;
  case 7:
    console.log("C등급입니다.");
    break;
  case 6:
    console.log("D등급입니다.");
    break;
  default: {
    console.log("F등급입니다.");
  }
}
