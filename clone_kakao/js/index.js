let headerElem = document.getElementById("header");
let navItemList = document.querySelectorAll("#gnbList li a");
let gnbListElem = document.getElementById("gnbList");

let currScroll = window.scrollY;

window.addEventListener("scroll", (e) => {
  console.log("실행");
  // scroll 내려가면 active 클래스 지우기
  if (currScroll < scrollY) {
    headerElem.classList.remove("onTop");
    if (scrollY > 200) headerElem.classList.remove("active");
  }
  // scroll 올라가면 active 클래스 추가하기
  else headerElem.classList.add("active");

  if (scrollY === 0) headerElem.classList.add("onTop");
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
  navItemList.forEach((item) => {
    if (e.target === item) item.classList.add("active");
    else item.classList.remove("active");
  });
});

gnbListElem.addEventListener("mouseleave", function () {
  navItemList.forEach((item) => {
    item.classList.add("active");
  });
});
