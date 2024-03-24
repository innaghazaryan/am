//Slider
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const sliderbtnleft = document.querySelector(".slider-button-left");
const sliderbtnright = document.querySelector(".slider-button-right");
let currentSlide = 0;

dots[currentSlide].classList.add("active");

sliderbtnright.addEventListener("click", function () {
  dots[currentSlide].classList.remove("active");
  if (currentSlide == 0) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-1538px)`;
    }
    currentSlide++;
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(0px)`;
    }
    currentSlide--;
  }
  dots[currentSlide].classList.add("active");
});
sliderbtnleft.addEventListener("click", function () {
  dots[currentSlide].classList.remove("active");
  if (currentSlide == 1) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(0px)`;
    }
    currentSlide--;
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-1538px)`;
    }
    currentSlide++;
  }
  dots[currentSlide].classList.add("active");
});

dots[0].addEventListener("click", () => {
  dots[1].classList.remove("active");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(0px)`;
  }
  dots[0].classList.add("active");
});

dots[1].addEventListener("click", () => {
  dots[0].classList.remove("active");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-1538px)`;
  }
  dots[1].classList.add("active");
});

//rates
const ratesTable = document.querySelector(".table-for-rates");
const goldTable = document.querySelector(".table-for-gold");
const ratesRadio = document.querySelector("#ex-rate");
const goldRadio = document.querySelector("#gold");

ratesRadio.addEventListener("click", () => {
  goldTable.classList.add("display-none");
  ratesTable.classList.remove("display-none");
  arrowDown.classList.remove("opacity");
  if (arrowDown.classList.contains("display-none")) {
    deleteTableRows();
  }
});
goldRadio.addEventListener("click", () => {
  ratesTable.classList.add("display-none");
  goldTable.classList.remove("display-none");
  deleteTableRows;
  arrowDown.classList.add("opacity");
  arrowUp.classList.add("display-none");
});

//currency calculator
const currSelect = document.getElementById("currency");
const currSelect2 = document.getElementById("currency2");
let converterSpan = document.querySelector(".converter-span");
let currInput = document.getElementById("curr-input");
let result;
const curr = {
  AMD: {
    AMD: 1,
    USD: 0.0025,
    EUR: 0.0023,
    GBP: 0.002,
  },
  USD: {
    USD: 1,
    AMD: 395,
    EUR: 0.9,
    GBP: 0.78,
  },
  EUR: {
    EUR: 1,
    AMD: 427.5,
    USD: 1.06,
    GBP: 0.84,
  },
  GBP: {
    GBP: 1,
    AMD: 482,
    USD: 1.2,
    EUR: 1.08,
  },
};

function convertTo() {
  for (let prop in curr) {
    if (prop == currSelect.value) {
      result = currInput.value * curr[prop][currSelect2.value];
      converterSpan.innerHTML = result;
    }
  }
}

currSelect.addEventListener("change", convertTo);
currSelect2.addEventListener("change", convertTo);

currInput.addEventListener("keyup", convertTo);

//add table
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const table = document.querySelector(".table-for-rates");
function tableAddition() {
  let row1 = table.insertRow(-1);
  let row1_cell1 = row1.insertCell(0);
  row1_cell1.innerHTML = "CAD";
  let row1_cell2 = row1.insertCell(1);
  row1_cell2.innerHTML = "282";
  let row1_cell3 = row1.insertCell(2);
  row1_cell3.innerHTML = "301";
  let row1_cell4 = row1.insertCell(3);
  row1_cell4.innerHTML = "284";
  let row1_cell5 = row1.insertCell(4);
  row1_cell5.innerHTML = "304";
  //row2
  let row2 = table.insertRow();
  let row2_cell1 = row2.insertCell(0);
  row2_cell1.innerHTML = "JPY";
  let row2_cell2 = row2.insertCell(1);
  row2_cell2.innerHTML = "2.90";
  let row2_cell3 = row2.insertCell(2);
  row2_cell3.innerHTML = "3.05";
  let row2_cell4 = row2.insertCell(3);
  row2_cell4.innerHTML = "2.90";
  let row2_cell5 = row2.insertCell(4);
  row2_cell5.innerHTML = "3.05";
  //row3
  let row3 = table.insertRow();
  let row3_cell1 = row3.insertCell(0);
  row3_cell1.innerHTML = "AUD";
  let row3_cell2 = row3.insertCell(1);
  row3_cell2.innerHTML = "259";
  let row3_cell3 = row3.insertCell(2);
  row3_cell3.innerHTML = "279";
  let row3_cell4 = row3.insertCell(3);
  row3_cell4.innerHTML = "262";
  let row3_cell5 = row3.insertCell(4);
  row3_cell5.innerHTML = "282";
  //row4
  let row4 = table.insertRow();
  let row4_cell1 = row4.insertCell(0);
  row4_cell1.innerHTML = "AED";
  let row4_cell2 = row4.insertCell(1);
  row4_cell2.innerHTML = " ";
  let row4_cell3 = row4.insertCell(2);
  row4_cell3.innerHTML = " ";
  let row4_cell4 = row4.insertCell(3);
  row4_cell4.innerHTML = "105";
  let row4_cell5 = row4.insertCell(4);
  row4_cell5.innerHTML = "110";
  //row5
  let row5 = table.insertRow();
  let row5_cell1 = row5.insertCell(0);
  row5_cell1.innerHTML = "CNY";
  let row5_cell2 = row5.insertCell(1);
  row5_cell2.innerHTML = " ";
  let row5_cell3 = row5.insertCell(2);
  row5_cell3.innerHTML = " ";
  let row5_cell4 = row5.insertCell(3);
  row5_cell4.innerHTML = "56";
  let row5_cell5 = row5.insertCell(4);
  row5_cell5.innerHTML = "60";
  //row6
  let row6 = table.insertRow();
  let row6_cell1 = row6.insertCell(0);
  row6_cell1.innerHTML = "SEK";
  let row6_cell2 = row6.insertCell(1);
  row6_cell2.innerHTML = " ";
  let row6_cell3 = row6.insertCell(2);
  row6_cell3.innerHTML = " ";
  let row6_cell4 = row6.insertCell(3);
  row6_cell4.innerHTML = "35.5";
  let row6_cell5 = row6.insertCell(4);
  row6_cell5.innerHTML = "39.5";
  arrowDown.classList.add("display-none");
  arrowUp.classList.remove("display-none");
}
function deleteTableRows() {
  for (let i = 0; i < 6; i++) {
    table.deleteRow(-1);
  }
  arrowDown.classList.remove("display-none");
  arrowUp.classList.add("display-none");
}
arrowDown.addEventListener("click", tableAddition);
arrowUp.addEventListener("click", deleteTableRows);

//sticky navbar
window.onscroll = function () {
  stickyMenu();
};

let navbar = document.querySelector(".main-menu");
let sticky = navbar.offsetTop;
let menuItems = document.querySelectorAll(".m1");

function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
