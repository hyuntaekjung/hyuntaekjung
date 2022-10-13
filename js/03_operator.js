/* 
    연산자 : 산술, 할당, 비교 등을 통해서 새로운 값을 생성한다.
    피연산자 : 연산에 사용되는 값.
*/
var num = 10 + 30;

// 산술 연산자 : 피연산자에 산술을 통해서 새로운 값을 생성한다.
console.log(5 + 1);
console.log(4 - 3);
console.log(20 * 20);
console.log(20 / 3);
console.log(20 % 3); // 나머지가 나온다.
console.log(4 - 2 * 4); // 사칙연산 적용 => -4

/* 
  단항 산술 연산자 : 1개의 피연산자에 산술을 적용하여 새로운 값을 생성한다.
  ++ : 피연산자의 값을 1 증가한다.
  -- : 피연산자의 값을 1 감소한다.
  - : 양수를 음수로, 음수를 양수로 만든다. 
  전위 연산자 : 우선 순위가 첫번째.
  후위 연산자 : 우선 순위가 마지막.
*/

var num02 = 5;
console.log(++num02); // 6
console.log(num02--); // 6
console.log(num02); // 5

var num03 = 10;
var num04 = 1 - num03++ * 2;
console.log(num04, num03);

/* 
   할당(대입, =) 연산자 : 변수의 값을 할당하는 연산자.
*/
var score = 90;

score += 10; // score = score + 10;
score *= 2;
score *= score;
console.log(score);

/* 
   비교 연산자(==) : 좌항과 우항의 값이 같은지 비교해서 true 혹은 false 값을 반환한다.
   동등 연산자(===) : 데이터형까지 비교한다.=> 비교 연산자보다 많이 사용한다.
*/
console.log(score == "40000");
console.log(score === "40000");
console.log(false === 0);

// 불일치 연산자와 부동등 연산자. 일치하지 않으면 true, 일치하면 false.
console.log(score != 20000);
console.log(score != 40000);

var isTrue = true;
console.log(!isTrue);

/*
논리 연산자 : 좌항과 우항의 논리값을 조합해서 새로운 논리값을 반환.
||(or) : A or B => A와 B 중에 하나라도 true면 true, 둘다 fales일때만 fales를 반환.
&&(and) : A or B => A와 B 둘다 true 일때만 true로 반환,
!(not) : 부정 => true라면 false로, false라면 true로 반환.
*/

var isTrue = true;
console.log(true || false);
console.log(false || false);
console.log(!(false && false));

/*
연결 연산자(문자열)  : 좌항과 우항의 문자열을 연결 => 템플릿 리터럴 사용하는 것이 가독성이 좋다
*/

var str = "안녕하세요" + "저는" + +30 + "세" + "황보석입니다.";
console.log(str);

var name = "황보석";
var age = 30;
var address = "인천";

var greeting =
  "안녕하세요 저는 " + address + "에 사는 " + age + "세 " + name + "입니다.";
console.log(greeting);

// 템플릿 리터럴 : ``(백틱)안의 문자열에 ${}를 이용해 변수에 있는 값을 문자열에 포함시킨다.
var greeting2 = `안녕하세요 저는 ${address}에 사는 ${age}세 ${name}입니다.`;
console.log(greeting2);

// 현재 연도와 내 생년을 year, birthYear 변수에 담아서 나이를 구하기
var year = 2022;
var birthYear = 2000;
var age = year - birthYear + 1;
console.log(age);
var name = "정현택";

var greeting3 = `안녕하세요, 저는 ${age}살 ${name}입니다.`;
console.log(greeting3);

// 템플릿 리터럴로 소개하는 문장 console 창에 출력하기
