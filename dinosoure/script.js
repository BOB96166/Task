const ronaldo = document.getElementById("ronaldo");
const flower = document.getElementById("flower");

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
    let flowerLeft = parseInt(window.getComputedStyle(flower).getPropertyValue("left"));

    if (flowerLeft < 50 && flowerLeft > 0 && ronaldoTop >= 140) {
        alert("GAME OVER!")
    }
}, 10)

document.addEventListener("keydown", function (event) {
    jump();
  });