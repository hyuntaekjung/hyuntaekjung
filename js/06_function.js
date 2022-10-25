/*
    함수(function) : 여러번 실행할 코드를 미리 작성한 후 필요한 순간에 호출해서 사용할 수 있다.
    장점 1 : 재사용성이 증가한다.
    장점 2 : 유지보수성이 뛰어나다.
    장점 3 : 다른 사람이 사용할 때 로직에 대해서 이해할 필요가 없다. => 사용법이 쉽다.
*/

// 1. 매개변수 없는 함수
function greeting() {
  // 실행할 코드 작성
  console.log("안녕하세요!");
  console.log("저는 황보석입니다.");
}

greeting(); // 함수 호출
greeting(); // 하나의 함수를 여러번 호출

/*
    2. 매개변수가 있는 함수
    매개변수(parameter) : 함수를 호출할 때 전달될 값을 함수 내에서 유효한 변수로써 사용
    인자 (argument) : 매개변수를 통해서 전달된 실제 값 => 작성한 매개변수 순서대로 전달해야 한다
*/
function add(a, b) {
  console.log(a + b);
}
add(10, 2); // 10,2 를 매개변수에 전달 => 10,2를 인자로 하여 호출

/*
    3. return이 있는 함수
    전달된 인자를 가지고 연산결과를 반환해주는 함수
    함수는 return 이후의 코드를 실행하지 않는다 => 함수 종료를 의미
*/
function sum(num01, num02) {
  return num01 + num02;
  console.log("실행");
}

var result = sum(10, 20);
console.log(result);

// 숫자 두개를 입력받아 두 숫자의 빼기 결과를 반환하는 함수를 result02 변수에 담아서 console 출력해보기
// 1. 숫자 두개 입력받기
// 2. 두 숫자 빼기
// 3. result02 변수에 담기(반환)
// 4. console 창에 result02 출력
function sub(x, y) {
  return x - y;
}
var result02 = sub(10, 5);
console.log(sub(10, 5));

// 전달된 인자가 짝수인지 홀수인지 리턴해주는 함수
//  => if문 안에서도 return 가능
//  => 2를 넣으면 "짝수", 반환 3을 넣으면 "홀수" 반환
function getNumType(num) {
  if (num % 2 === 0) return "짝수";
  else return "홀수";
}

// return 이후에 코드가 실행되지 않는 점을 이용한 분기처리
function foo(num) {
  // 짝수가 아닌 경우 return되어 이후 코드 실행되지 않는다.
  if (num % 2 !== 0) return;
  // 실행할코드
  console.log("짝수!");
}
foo(3);

console.log(getNumType(3));

// 숫자 3개 평균 구하는 함수
function getAverage(a, b, c) {
  return (a + b + c) / 3;
}
console.log(getAverage(3, 6, 9));

// 위의 함수 두개로 나눠보기
function getTotal(a, b, c) {
  return a + b + c;
}

function getDivide(num01, count) {
  return num01 / count;
}

var num03 = getTotal(10, 20, 30);
var dividedNum = getDivide(num03, 3);
console.log(dividedNum);

// 함수 작성 방식에 따른 차이

/* 
  1. 기명함수(함수 선언문)
    - 이름이 있는 함수
    - 함수 선언 이전에 호출 가능
*/
함수이름();
function 함수이름() {
  console.log(this);
  console.log("함수 실행");
}

/* 
  2. 익명함수(함수 표현식)
    - 이름이 없는 함수 => 함수 표현식으로 변수에 할당하는 식으로 사용
    - 함수 선언 이전에 호출 불가.

*/
// getData();
let getData = function () {
  console.log("데이터 받는 중..");
};
getData();

console.log(typeof 함수이름); // function 출력

/* 
  화살표 함수(arrow function) : 화살표를 통해서 간략하게 함수를 정의
    - 코드블록을 생략하면 바로 값 return 
    - 간략하게 표현 가능하기 때문에 콜백함수로 전달할 때 주로 사용 => 다른 함수의 인자로 전달
    - this 바인딩 x. => this를 지정할 수 없다. 기본적으로 최상위 객체를 가르킨다.
      => 브라우저 환경에서 실행하면 window객체를 가르킨다.
*/
let getMovie = () => {
  console.log("this : ", this);
  console.log("화살표 함수 실행");
};

getMovie();

let addNum = (a, b) => a + b;
console.log(addNum(2, 3));

// 콜백함수 : 함수의 인자로 전달되는 함수. => JS에서 함수는 값으로 평가되는 일급객체라서 가능.
//    => 함수를 실행해야하는데 그 코드를 다른데에서 결정될 때 사용
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    console.log(i + "번째 실행");
    callback();
  }
}

repeat(5, getMovie); // getMovie를 콜백함수로 전달

// 콜백함수로 익명함수를 전달
repeat(5, function () {
  console.log(`반복 실행`);
});
repeat(5, () => console.log("반복실행"));
