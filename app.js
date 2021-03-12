
const main = document.querySelector(".main");
function init () {
for (let i = 0; i<9; i++) {
  main.innerHTML += '<div class="no selected"></div>';
  }
}
function clear() {
  main.innerHTML = '';
}

init ()

let move = 0;
main.onclick = function (e) {
  console.log(e)
  let value = "0";
  if(e.target.className === "no selected") {
    if (move%2 === 0) {
      value = "0";
    }
    else {
      value = "X"
    }
    e.target.innerHTML = value;
    e.target.className = "selected";
    move++;
    if(move>4) {
      checkWinner(value);
    }
    if(move===9)
    itsWin ()
  }

}
  function checkWinner(val) {
    const allField = document.querySelectorAll(".selected")
    console.log(allField)
    for (let i = 0; i<9; i= i+3) {
      if(allField[i].innerHTML === val && allField[i+1].innerHTML === val && allField[i+2].innerHTML === val)

  itsWin (val)

    }
    for (let i = 0; i<3; i++) {
      if (allField[i].innerHTML === val && allField[i+3].innerHTML === val && allField[i+6].innerHTML === val)

  itsWin (val)

  }

  if (allField[0].innerHTML === val && allField[4].innerHTML === val && allField[8].innerHTML === val)

  itsWin (val)

  if (allField[2].innerHTML === val && allField[4].innerHTML === val && allField[6].innerHTML === val)

  itsWin (val)

  }

function itsWin (val) {
  if(!val) {
    alert("No one win")
  }
  else {
  alert(val + " win");
  window.location.reload()
  }
}

