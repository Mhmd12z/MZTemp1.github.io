let menu = document.querySelector(".links");
let menuBtn = document.querySelector(".menu-icon");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("close");
});
let returnToTop = document.createElement("button");
returnToTop.innerHTML = "Return to top";
returnToTop.style.cssText = `
background-color: var(--primary-color);
width: 50px;
height:50px;
position: fixed;
bottom: 0;
right: 0;
margin:30px;
font-size:10px;
font-weight:700;
border:none;
border-radius:5px;
padding:10px;
display:flex;
justify-content:center;
align-items:center;
transition: all .3s ease-in-out;
cursor: pointer;
opacity:0;
z-index:-1;
`;
returnToTop.onmouseover = function () {
  this.style.backgroundColor = "white";
  this.style.color = "var(--primary-color)";
};
returnToTop.onmouseleave = function () {
  this.style.backgroundColor = "var(--primary-color)";
  this.style.color = "black";
};
document.body.appendChild(returnToTop);
window.onscroll = function () {
  if (scrollY > 300) {
    returnToTop.style.opacity = "1";
    returnToTop.style.zIndex="99";
  } else {
    returnToTop.style.opacity = "0";
    returnToTop.style.zIndex="-1";
  }
};
returnToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
let darkBtn = document.createElement("li");
let innerBtn = document.createElement("a");
darkBtn.style.cursor = "pointer";
innerBtn.innerHTML = "Change Mode";
darkBtn.appendChild(innerBtn);
menu.appendChild(darkBtn);

darkBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark", document.body.classList.contains("dark-mode"));
};
console.log(localStorage.getItem("dark"));
window.onload = function () {
  document.body.style.cssText = `
  transition: all .3s ease-in-out;
  opacity: 1;
  `;
  if (localStorage.getItem("dark")==="true") {
    document.body.className="dark-mode";
  } else {
    document.body.className="_";
  }
};
