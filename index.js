var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer.", "Vfx Artist.", "Freelancer."],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".span2", {
  strings: ["Frontend Developer.", "Vfx Artist.", "Freelancer."],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});
AOS.init({
  duration:800,
});
document.querySelector('.scrollButton').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let navHeight = 80; // Height of the fixed navbar in pixels
  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

  const updateNavHeight = () => {
    if (window.innerWidth >= 0 && window.innerWidth < 576) {
      navHeight = 45;
    } else if (window.innerWidth >= 576 && window.innerWidth < 992) {
      navHeight = 50;
    } else {
      navHeight = 80;
    }
    
  };

  // Initial call to set the initial navHeight based on the viewport size
  updateNavHeight();

  window.addEventListener('resize', updateNavHeight);

  const scrollToSection = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - navHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  smoothScrollLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    link.addEventListener('click', event => scrollToSection(event, targetId));
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const hamicon = document.querySelector(".hamicon");
  const hamicons = document.querySelector(".hamicons");
  const hamiconContainer = document.querySelector(".hamiconcontainer");
  let isHamiconsVisible = false; // Track the visibility state

  hamiconContainer.addEventListener("click", function() {
    if (isHamiconsVisible) {
      // Hide the hamicons with opacity transition
      hamicons.style.opacity = "0";
      hamiconContainer.style.backgroundColor = "#1f242d";
      isHamiconsVisible = false;
    } else {
      // Show the hamicons with opacity transition
      hamicons.style.opacity = "1";
      hamiconContainer.style.backgroundColor = "#1f242d";
      isHamiconsVisible = true;
    }
  });

  // Initially hide hamicons
  hamicons.style.opacity = "0";
  // Add transition property to hamicons
  hamicons.style.transition = "opacity 0.5s";
  // Add transition property to hamiconContainer
  hamiconContainer.style.transition = "background-color 0.5s";
});
let showskillbar = document.querySelector(".showskillbar");
let hideskillbar = document.querySelector(".hideskillbar");
let myskills = document.querySelector(".myskills");
let boxicon = document.querySelector(".boxiconvisibility");
let aboutmesection =document.querySelector(".aboutmesection1");
let divwidth1 = document.querySelector(".skill1 div div");
let divwidth2 = document.querySelector(".skill2 div div");
let divwidth3 = document.querySelector(".skill3 div div");
let divwidth4 = document.querySelector(".skill4 div div");
let divwidth5 = document.querySelector(".skill5 div div");
showskillbar.addEventListener("click", () => {
  if (myskills.classList.contains("myskillshide")) {
    myskills.classList.remove("myskillshide");
    boxicon.setAttribute("name", "chevron-up");
    divwidth1.style.width = "88%";
    divwidth2.style.width = "80%";
    divwidth3.style.width = "77%";
    divwidth4.style.width = "85%";
    divwidth5.style.width = "65%";
  } else {
    myskills.classList.add("myskillshide");
    boxicon.setAttribute("name", "chevron-down");
    divwidth1.style.width = "0%";
    divwidth2.style.width = "0%";
    divwidth3.style.width = "0%";
    divwidth4.style.width = "0%";
    divwidth5.style.width = "0%";
  }
});

//weatherapp
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "55e78d745422b53780b19ef1d28b9ff0";
const searchbox = document.querySelector(".searchbox input");
const searchbtn = document.querySelector(".searchbox box-icon");
const weathericon = document.querySelector(".weatherappimages");
async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".weatherappcityname").innerHTML = data.name;
  document.querySelector(".weatherapptemprature").innerHTML =
    Math.floor(data.main.temp) + "°C";
  document.querySelector(".weatherapphumidity").innerHTML =
    data.main.humidity + "% " + "Humidity";
  document.querySelector(".weatherappwindspeed").innerHTML =
    data.wind.speed + " Km/h " + "Wind Speed";
  if (data.weather[0].main == "Clouds") {
    weathericon.src = "Images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "Images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "Images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "Images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "Images/mist.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "Images/mist.png";
  }
}
function handleSearchOnEnter(event) {
  if (event.key === "Enter") {
    checkweather(searchbox.value);
  }
}
searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
searchbox.addEventListener("keydown", handleSearchOnEnter);
// ..............................
// Text to speech convertor

//qrcode gen
let imgbox = document.querySelector(".qrcodeimgcontainer");
let qrimage = document.getElementById("qrimage");
let qrtext = document.querySelector(".qrcodecon1 input");
let qrbtn = document.querySelector(".qrcodecon1 button");
function generateqr() {
  if (qrtext.value.length > 0) {
    qrimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    qrimage.classList.add("show-img");
  }
}
qrtext.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateqr();
  }
});
qrbtn.addEventListener("click", generateqr);
//jokes app
let jokecontainer =document.querySelector(".jokesapp p");
let jokesbtn =document.querySelector(".jokesapp button");
let jokeurl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist&type=single";
let getjoke = ()=>{
  fetch(jokeurl).then(data=>data.json()).then(item=>{
    jokecontainer.textContent = `${item.joke}`;
  });
}
jokesbtn.addEventListener("click",getjoke);
//password generator
const resultElement = document.querySelector("#result");
const lengthElement = document.querySelector("#length");
const capitalElement = document.querySelector("#capital");
const smallElement = document.querySelector("#small");
const numberElement = document.querySelector("#number");
const specialElement = document.querySelector("#symbol");
const form = document.querySelector("#pg-form");
const clipBoard = document.querySelector(".clipboard");

const fieldsArray = [
  {
    field: capitalElement,
    getChar: getCapitalLetter
  },
  {
    field: smallElement,
    getChar: getSmallLetter
  },
  {
    field: numberElement,
    getChar: getNumber
  },
  {
    field: specialElement,
    getChar: getSpecialChar
  }
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const length = lengthElement.value;
  let generatePassword = "";
  const typeArray = fieldsArray.filter(({ field }) => field.checked);

  for (i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * typeArray.length);
    const letter = typeArray[index].getChar();
    generatePassword += letter;
  }
  resultElement.value = generatePassword;
});

function getRandomChar(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

function getCapitalLetter() {
  return getRandomChar(65, 90);
}

function getSmallLetter() {
  return getRandomChar(97, 122);
}

function getNumber() {
  return getRandomChar(48, 57);
}

function getSpecialChar() {
  const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

clipBoard.addEventListener("click", async () => {
  const text = resultElement.value;
  if (text) {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  } else {
    alert("No password to copy");
  }
});
let sendformbutton = document.querySelector(".sendbuttonform button");
function sendMail() {
  var params = {
    name: document.getElementById("formname").value,
    email: document.getElementById("formemail").value,
    subject: document.getElementById("formsubject").value,
    message: document.getElementById("formmessage").value,
  };

  const serviceID = "service_obgpw2x";
  const templateID = "template_i22pi98";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("formname").value = "";
        document.getElementById("formemail").value = "";
        document.getElementById("formsubject").value="";
        document.getElementById("formmessage").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch();

}
sendformbutton.addEventListener("click",sendMail);
function downloadCV() {
  const fileName = "AshutoshYadavResume.pdf"; // Change the file name and extension as needed
  const fileUrl = "Images/AshutoshYadavResume.pdf"; // Replace with the actual path to your CV file

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Attach the event listener to the button
const cvButton = document.querySelector(".cv");
cvButton.addEventListener("click", downloadCV);
