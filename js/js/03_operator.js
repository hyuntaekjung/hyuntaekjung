/*
    연산자 : 산술, 할당, 비교 등을 통해서 새로운 값을 생성.
    피연산자 : 연산에 사용되는 값.
*/

var num = 10 + 30;

// 산술 연산자 : 피연산자에 산술을 통해서 새로운 값 생성.
console.log(5 + 1);
console.log(4 - 3);
console.log(20 * 20);
console.log(20 / 3);
console.log(20 % 3); // 나머지
console.log(4 - 2 * 4); // 사칙연산 적용 => -4

/* 
    단항 산술 연산자 : 1개의 핀연산자에 산술을 적용하여 새로운 값 생성.
    ++ : 피연산자의 값을 1 증가.
    -- : 피연산자의 값을 1 감소.
    - : 양수를 음수로, 음수를 양수로 만듦.
    전위 연산자 : 우선 순위가 첫번째.
    후위 연산자 : 우선 순위가 마지막.
*/
var num02 = 5;
console.log(++num02); // 6
console.log(num02--); // 6
console.log(num02);

var num03 = 10;
var num04 = 1 - num03++ * 2;

console.log(num04, num03);

/*
    할당(대입) 연산자 : 변수에 값을 할당하는 연산자.
*/
var score = 90;

// 우항의 값을 좌항에 산술하여 할당.
score += 10; // score = score + 10;
score *= 2;
score *= score;
console.log(score);

/* 
    비교 연산자(==) : 좌항과 우항의 값이 같은지 비교하여 true 혹은 false 값을 반환.
    동등 연산자(===) : 데이터형까지 비교를 한다.
*/
console.log(score == "40000");
console.log(score === "40000");
console.log(false === 0);

// 불일치 연산자와 부동등 연산자. => 일치하지 않으면 true, 일치 false
console.log(score !== "40000");

/*
    논리 연산자 : 좌항과 우항의 논리값을 조합해서 새로운 논리값을 반환.
    ||(or) : A or B => A와 B 중에 하나라도 true이면 true, 둘다 false 일때만 false를 반환
    &&(and) : A and B => A와 B 둘다 true일 때만 true, 둘 중 하나라도 false라면 false를 반환
    !(not) : 부정 => true라면 false로, false라면 true를 반환
*/

var isTrue = true;
console.log(true || false); // true or false => true
console.log(false || false); // false or false => false
console.log(false && false); // false and false => false
console.log(!false); // false의 반전값 => true
console.log(!(false && false)); // (false and false)의 반전값 => true
console.log(2 > 1 && 1 < 10);

/*
    연결 연산자(문자열) : 좌항과 우항의 문자열을 연결하여 반환
    문자열과 숫자에 연결 연산자를 사용해도 문자열로 반환
        => 템플릿 리터럴 사용하는 것이 가독성 좋다.
*/

var str = "안녕하세요" + 30 + " 황보 석입니다.";
console.log(str);

var name = "황보석";
var age = 30;
var address = "인천";

var greeting =
  "안녕하세요 저는 " + address + "에 사는 " + age + "세 " + name + "입니다.";
console.log(greeting);

// 템플릿 리터럴 : ``(백틱)안의 문자열에 ${}를 이용해 변수에 있는 값을 문자열에 포함시킨다.
var greeting02 = `안녕하세요 저는 ${address}에 사는 ${age}세 ${name}입니다.`;
console.log(greeting02);

// 현재 연도와 내 생년도 yaer, birthYear 변수에 담아서 나이를 구한 뒤 age 변수에 담기
var year = 2022;
var birthYear = 1993;
var age = year - birthYear + 1;

// 템플릿 리터럴로 소개하는 문장 console창에 출력해보기
var greeting03 = `안녕하세요 저는 ${age}세 ${name}입니다.`;
console.log(greeting03);
