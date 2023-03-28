const btn = document.querySelector(".btn");
const passWord = document.getElementById("passWord");
const link = document.getElementById("link");
const seasonNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const episodeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

btn.addEventListener(`click`, function (e) {
  if (passWord.value.toUpperCase() === `MONK`) {
    link.setAttribute("href", "https://www.dizigom.tv/dizi-izle/monk/");
  }
  for (let i = 0; i < seasonNumbers.length; i++) {
    for (let b = 0; b < episodeNumbers.length; b++) {
      console.log(`${seasonNumbers[i]}/${episodeNumbers[b]}`);
      if (
        passWord.value.toUpperCase() ===
        `MONK ${seasonNumbers[i]}/${episodeNumbers[b]}`
      ) {
        link.setAttribute(
          "href",
          `https://www.dizigom.tv/monk-${seasonNumbers[i]}-sezon-${episodeNumbers[b]}-bolum-hd1/`
        );
      }
    }
  }
  if (passWord.value.toUpperCase() === `YOUTUBE`) {
    link.setAttribute(`href`, `https://www.youtube.com`);
  }
  if (passWord.value.toUpperCase() === `IRFNETLIFY`) {
    link.setAttribute(`href`, `https://app.netlify.com/teams/irf009/overview`);
  }
  if (passWord.value.toUpperCase() === `IRFGITHUB`) {
    link.setAttribute(`href`, `https://www.github.com`);
  }
});

console.log(link.getAttribute("href"));

btn.addEventListener("click", function adamGibiYaz() {
  if (link.getAttribute("href") === "#") {
    alert("adam gibi yaz la");
  }
});
