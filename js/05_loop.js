// for문 : (초기값 변수; 조건식; 증감식)
// 조건식이 참이라면 코드블록을 실행하고 증감식을 실행한다. => 반복한다.

for (var i = 0; i <= 5; ++i) {
  console.log(`${i + 1}번째 실행`);
  for (var j = 0; j < 3; j++) {
    console.log(`j : ${j}번째 실행`);
  }
}

for (var g = 2; g <= 9; ++g) {
  console.log(g + "단");
  for (var h = 1; h <= 9; h++) {
    console.log(`${g} * ${h} = ${g * h}`);
  }
}

//  while : () 안의 조건식이 true라면 반복 실행 => false일 때까지 실행한다.
//  반복횟수가 불명확할 떄 사용한다. => 사용자의 동작에 따라 반복문을 멈춘다.

console.log("------------");

while (True) {
  // 사용자가 숫자를 입력할 때까지 반복한다.
  // 숫자가 아닌 문자를 넣으면 반복해서 입력창을 출력한다.
  var value = prompt("숫자를 입력해주세요");
  // 숫자를 넣으면 반복문을 끝낸다.
  if (!isNan(parseInt(value))) break;
}
