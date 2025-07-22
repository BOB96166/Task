const ronaldo = document.getElementById("ronaldo");
const cactus = document.getElementById("flower");

function jump() {
    if (ronaldo.classList != "jump") {
      ronaldo.classList.add("jump");
  
      setTimeout(function () {
        ronaldo.classList.remove("jump");
      }, 300);
    }
  }


let isAlive = setInterval ( function() {
    let ronaldoTop = parseInt(window.getComputedStyle(ronaldo).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && ronaldoTop >= 140) {
        alert("GAME OVER!")
    }
}, 10)

document.addEventListener("keydown", function (event) {
    jump();
  });