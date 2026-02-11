const heroText = "> Engineering-led execution at business scale.";
const hero = document.getElementById("hero");

let index = 0;

function type() {
  if (index < heroText.length) {
    hero.textContent += heroText[index];
    index++;
    setTimeout(type, 70);
  } else {
    hero.innerHTML += '<span class="cursor"></span>';
  }
}

type();
