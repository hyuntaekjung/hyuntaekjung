/*
    1. 변수(Variable)
    - 메모리 공간에 데이터를 저장(할당)할 수 있는 공간을 마련하고, 이름(변수명)을 붙혀서 해당 공간(주소)에 접근(참조)할 수 있다.
    - 데이터를 보관하는 상자.
*/

/* 
    2. 변수 선언(Declaration)
    - 데이터를 저장할 공간을 확보하고 해당 공간에 접근할 수 있는 변수명을 붙힌다.
    - var, let, comst 키워드 뒤에 변수명을 짓는다.
    - 변수명을 짓는 규칙 : 
      1. 문자와 숫자, _(언더바), $(달러)만 사용할 수 있다.
      2. 변수명은 숫자로 시작할 수 없다.
      3. JS에 약속되어 있는 예약어(키워드)는 사용할 수 없다.
      4. 변수명은 대소문자를 구분한다.
      - , (쉼표)를 통해서 여러 개의 변수를 한번에 선언할 수 있다.
*/

var num;
var Num;
var 숫자;
var _num;
var a, b; //쉼표를 통해 a,b 변수를 한번에 선언.

/* 
변수명(식별자) 안되는 예시
var 1num; 숫자로 시작할 수 없음.
var var; 키워드는 변수명으로 사용할 수 없음.
var for; 키워드는 변수명으로 사용할 수 없음.
*/

/* 
    3. 할당(Assignment)
    - 선언된 변수(메모리 공간)에 값을 저장한다.
    - =(대입 연산자)를 통해 우항에서 좌항으로 할당된다.
    - 이미 값이 저장된 변수에 새로운 값을 할당하는 것이 가능하다.
*/

num = 10;
num = 20;
console.log(num);

/*
   4. 초기화(initialization)
   -변수를 선언만 하면 undefined(정의하지 않은)이라는 값으로 초기화 된다.
   -변수 선언과 할당을 동시에 할 수가 있다.
*/

// 문제.1
var str = "Hello JS";
console.log(str);

var result = (num = 30);
console.log(num, result);

// 문제.2
var num02 = 100;
var num03 = 200;

// 임시 공간에 num03을 저장.
var temp = num03;
num03 = num02;
num02 = temp;
console.log(num02, num03);