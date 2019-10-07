// let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

// window.onscroll = function() {
//   addSticky();
// };

function scrollClick(id) {
  console.log("clicked");
  // var reqId = "#" + id;
  // window.scrollTo(0, $(reqId).offset().top - 85);
}

function test() {
  alert("test");
}

const aTags = document.querySelectorAll("a");
// debugger;
aTags[0].addEventListener("mousedown", test());
