// Light and Dark mode selectors
const lightAndDarkMode = document.getElementById("lightAndDarkMode");
const header = document.getElementById("header-text");
const sunAndMoonImg = document.getElementById("");
const names = document.getElementById("name");

// Changes CSS color properties of selectors above
lightAndDarkMode.addEventListener("click", () => {
  if (lightAndDarkMode.className === "sun") {
    //changes font and background colors
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    header.style.color = "white";
    names.style.borderColor = "black";
    // Change light/dark mode image
    lightAndDarkMode.src = "./images/moon.png";
    lightAndDarkMode.className = "moon";
  } else if (lightAndDarkMode.className === "moon") {
    document.body.style.backgroundColor = "rgb(30, 30, 30)";
    document.body.style.color = "white";
    header.style.color = "black";
    names.style.borderColor = "white";
    lightAndDarkMode.src = "./images/sun.png";
    lightAndDarkMode.className = "sun";
  }
});
