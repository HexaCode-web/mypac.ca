// JavaScript to apply blur on .Left when hovering over .Right
const rightCard = document.querySelector(".Right");
const leftCard = document.querySelector(".Left");

rightCard.addEventListener("mouseover", () => {
  console.log("in left car");
  leftCard.style.filter = "blur(5px)";
});

rightCard.addEventListener("mouseout", () => {
  leftCard.style.filter = "blur(0)";
});

leftCard.addEventListener("mouseover", () => {
  rightCard.style.filter = "blur(5px)";
});

leftCard.addEventListener("mouseout", () => {
  rightCard.style.filter = "blur(0)";
});
