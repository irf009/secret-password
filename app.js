const btn = document.querySelector(".btn");
const passWord = document.getElementById("passWord");
const link = document.getElementById("link");

function myFunction(val) {
  if (val.toUpperCase() === "MONK") {
    link.setAttribute("href", "https://www.dizigom.tv/dizi-izle/monk/");
  }
  if (val.toUpperCase() === "IRFGITHUB") {
    link.setAttribute("href", "https://github.com");
  }
  if (val.toUpperCase() === "IRFNETLIFY") {
    link.setAttribute("href", "https://app.netlify.com/teams/irf009/overview");
  }
}

const showLink = link.getAttribute("href");
console.log(showLink);

btn.addEventListener("click", function adamGibiYaz() {
  if (link.getAttribute("href") === "#") {
    alert("adam gibi yaz la");
  }
});
