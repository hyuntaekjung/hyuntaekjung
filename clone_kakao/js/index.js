let headerElem = document.getElementById("header");
let navItemList = document.querySelectorAll("#gnbList > li > a");
let gnbListElem = document.getElementById("gnbList");
let btnSideElem = document.querySelector(".btnSide");
let titleboxElem = document.querySelector(".titleBox");

let currScroll = window.scrollY;

window.addEventListener("scroll", () => {
  // scroll 내려가면 active 클래스 지우기
  if (currScroll < scrollY) {
    headerElem.classList.remove("onTop");

    titleboxElem.style.top = "0";
    if (scrollY > 200) {
      headerElem.classList.add("hide");
      titleboxElem.style.display = "block";
    }
  }
  // scroll 올라가면 active 클래스 추가하기
  else {
    headerElem.classList.remove("hide");
    titleboxElem.style.top = "73px";
    if (scrollY < 200) titleboxElem.style.dispaly = "none";
  }
  if (scrollY === 0) headerElem.classList.add("ontop");
  currScroll = scrollY;
});
// window.addEventListener("wheel", function (e) {
//   console.log(e.deltaY); 휠을 내리면 양수, 올리면 음수
//   if (e.deltaY > 0) console.log("내림");
//   else console.log("올림");  // scroll 내려가면 active 클래스 지우기
// });

// navItemList.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     navItemList.forEach((depth) => {
//       if (item === depth) depth.classList.add("active");
//       else depth.classList.remove("active");
//     });
//   });

//   item.addEventListener("mouseleave", () => {
//     navItemList.forEach((depth) => {
//       depth.classList.add("active");
//     });
//   });
// });

// 마우스 올린 요소 빼고 검은색 빼기
gnbListElem.addEventListener("mouseover", function (e) {
  /* 
    e.target : 이벤트가 발생한 요소
    e.currentTarget : 이벤트가 바인딩된 요소
  */
  if (e.target.matches("#gnbList > li > a")) {
    navItemList.forEach((item) => {
      if (e.target === item) item.classList.add("active");
      else item.classList.remove("active");
    });
  }
});

gnbListElem.addEventListener("mouseleave", function () {
  navItemList.forEach((item) => {
    item.classList.add("active");
  });
});

gnbListElem.addEventListener("click", function (e) {
  // depth01 클릭시에만 동작.
  if (e.target.matches("#gnbList > li > a")) {
    // a 태그 클릭 시 상위 노드(li) 안에 .depth02 요소 있는지 확인
    if (e.target.parentNode.querySelector(".depth02")) {
      // null, undefined는 false처럼 작동한다.
      e.preventDefault(); // 요소의 기본 기능을 실행하지 않는다.
      let depth01List = gnbListElem.querySelectorAll("#gnbList li");
      // 일단 모든 li의 on 클래스 지우기
      depth01List.forEach((depth) => {
        depth.classList.remove("on");
      });
      // 내가 클릭 li에만 on 클래스 더하기
      e.target.parentNode.classList.add("on");
    }
  }
});

btnSideElem.addEventListener("click", function () {
  document.getElementById("gnb").classList.add("on");
});
