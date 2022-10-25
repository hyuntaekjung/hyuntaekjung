/* 
    스코프(scope)
        - 식별자가 유효한 범위
        - 전역에서 접근 가능한 전역 스코프, 지역내에서만 접근한 지역 스코프
        - var, let/const 스코프 범위가 다르다.
        - 하위 스코프를 먼저 탐색한 후 식별자가 없으면 상위 스코프에서 찾는다.
*/

// 전역 스코프 : 어디서든 접근가능한 영역
var a = 10;
var b = 20;
let name = "seok";

function changeNum() {
  // 지역 스코프 : 지역 내에서만 유효한 변수
  // 동일한 이름의 식별자를 참조하면 => 지역내에서 먼저 찾고 없으면 밖(상위) 에서 찾는다.
  var a = 20;
  b = 30;

  let name = "hwangbo";
  console.log(name); // 함수 내에 name 변수가 존재하기 때문에 hwangbo 출력
}
changeNum();

console.log(a);
console.log(b);

/* 
    var 키워드의 문제점
    1. 중복 선언 가능 => 다른 데에서 사용을 했는지 알 수 없기 때문에 코드가 꼬일 수 있다.
    2. 선언 이전에 참조를 하더라도 오류가 발생하지 않는다. => 런타임(실행중)에 문제가 발생하면 고치기 번거롭다.
      => 호이스팅(hoisting) 발생 => 끌어올린 것처럼 동작한다.
      => 암묵적으로 undefined로 초기화 진행
    3. 함수 레벨 스코프만 지원 => 블록 레벨 스코프 지원 x
*/

// var 키워드는 중복 선언이 허용된다.
var a = 100;
console.log("a : ", a);

// c 변수 선언 이전에 참조
console.log(c); // undefined 출력
var c = 0;
console.log(c); // 0 출력

// var 키워드는 블록 레벨 스코프를 지원하지 않는다. => if문, for문 등의 블록 레벨 스코프 지원 x
{
  var a = 40;
}
for (var a = 0; a < 10; a++) {}
console.log("a  : ", a);

/* 
  let / const(상수) : 위에서 언급한 세가지 문제를 해결한다.
*/
let num = 2;
// let num = 3; 중복 선언 허용하지 않는다.

const PI = 3.14;
// PI = 3; const(상수)는 할당이 안된다.

const NUM = 1; // 선언과 동시에 초기화를 해야한다.

{
  // 블록 레벨 스코프를 지원 => 코드 블록 내에서만 유효한 변수
  let num = 3; // 지역변수
}
console.log(num);

// 선언 이전에 참조하는 것이 불가능하다. => 선언과 초기화 따로 진행 (TDZ : Temporary Dead Zone)
// console.log(str); 선언 이전에 참조 오류
let str = "Hello";

function sum(a, b) {
  let num = 1;
}

function sub(a, b) {
  let num = 10;
  console.log(num);
}

sub();

// 스코프 체인
function outer() {
  // 상위 스코프
  let num = 2;

  // outer 함수 내에서만 호출 가능
  function inner() {
    // 하위 스코프
    let num = 3;
    console.log(num);
  }

  inner();
}
