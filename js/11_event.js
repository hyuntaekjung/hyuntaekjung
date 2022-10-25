let box = document.querySelector(".box");
let btnList = document.querySelectorAll("button");

console.log(btnList);

/* 
    이벤트 바인딩 
        - 브라우저에서 일어나는 이벤트(클릭, 키보드 입력, 스크롤 등)에 실행할 콜백 함수(핸들러)를 바인딩(묶는다)한다.
        - 
*/

function clickElement() {
  alert("click");
  console.log(this);
}

/* 
    DOM 이벤트 핸들러
        - Element.on이벤트 에 함수를 할당하는 방식으로 사용한다.
        - 하나만 등록이 가능하다. => 나중에 등록한 핸들러가 덮어씌운다.
 */
box.onclick = function () {
  console.log("click box");
};

box.onclick = function () {
  console.log("클릭!!");
};

/* 
    addEventListener
        - 이벤트 핸들러를 등록한다.
        - 여러개의 콜백함수를 등록할 수 있다.
        - addEventListener(이벤트종류, 콜백함수, 옵션)
        - this는 이벤트가 바인딩된 객체를 가리킨다.
*/

btnList[0].addEventListener("click", function () {
  box.style.backgroundColor = "red";
});

btnList[1].addEventListener("click", function () {
  box.style.backgroundColor = "blue";
});

btnList[2].addEventListener("click", function () {
  box.style.backgroundColor = "black";
});

btnList.forEach((item) => {
  item.addEventListener("click", function () {
    alert("버튼 클릭2");
  });
});

// box 클릭시 border 추가 및 제거(3px, 검음색 실선)
box.addEventListener("click", function () {
  console.log(this);
  this.classList.toggle("active");
});

/* 
    Event 객체
        - 발생한 이벤트에 대한 다양한 정보를 가진 객체
        - 핸들러 함수의 첫번째 인자로 이벤트 객체가 들어온다.
        - Event.target : 이벤트가 발생한 대상 => ex) input태그의 입력된 값 읽어올 때 많이 사용
        - Event.currentTarget : 이벤트가 바인딩된 대상

    버블링
        - 하위 요소에서 이벤트 발생을 하면 상위 요소에 이벤트가 전파가 된다.
        - 이벤트 위임 : 상위 요소에 이벤트 등록하여 하위 요소의 이벤트를 처리한다.
            이벤트 위임 하는 이유
            => 각 하위 요소에 이벤트 핸들러를 등록하면 비용이 많이 든다.
            => 이벤트를 등록 후에 동적으로 생겨난 요소에는 이벤트가 등록되어 있지 않다.

    캡처링 
        - 상위 요소에 하위 요소 순으로 이벤트가 감지된다.
        - addEventListener의 세번째 인자로 true를 전달하면 캡처링
이 된다.
*/

box.addEventListener("click", function (e) {
  console.log(e.target, e.currentTarget);
});

let container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.currentTarget, e.target);
  //   alert("click : .container");

  // .container를 클릭 했을 때는 실행 x
  // button을 클릭했을 때는 실행
  //   if (e.currentTarget !== e.target) alert("버튼 클릭!");

  // Element.matches() : 인자로 전달된 선택자에 부합하는지 true, false 반환
  if (e.target.matches(".container button")) alert("버튼 클릭!");
});

container.innerHTML += `<button>노란색</button>`;

document.body.addEventListener("click", alertBody, true);

function alertBody() {
  alert("click : body");
}

/* 
    removeEventListener
        - 등록된 이벤트 핸들러를 제거한다.
        - 제거할 이벤트 핸들러를 구분해야하기 때문에 등록할 때 기명함수로 등록해야한다.
        - 등록할 때의 옵션과 동일해야 제거된다.
*/
document.body.removeEventListener("click", alertBody, true);
