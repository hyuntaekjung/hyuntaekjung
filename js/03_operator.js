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
