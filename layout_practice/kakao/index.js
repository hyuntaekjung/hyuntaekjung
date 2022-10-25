let headerElem = document.getElementById("header");

let currScroll = window.scrollY;

window.addEventListener("scroll", (e) => {
  if (crrScroll < scrollY) {
    headerElem.classList.remove("onTop");
    headerElem.classList.remove("active"); // 스크롤이 내려가면 제거
  } else headerElem.classList.add("active"); // 스크롤이 올라가면 추가

  if (scrollY === 0) headerElem.style.borderBottom = "none";
  currScroll = scrollY;
});

// window.addEventListener("wheel", function (e) {
//   console.log(e.deltaY); // 휠을 내리면 양수, 올리면 음수.
//   if (e.deltaY < 0) console.log("내림");
//   else console.log("올림");
// });
