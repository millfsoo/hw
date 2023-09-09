//GMAIL VALIDATOR

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "NOT OK";
    gmailResult.style.color = "red";
  }
};

//MOVE BLOCK

function moveChildBlock(targetPosition, currentPosition) {
  var smallBlock = document.querySelector(".child_block");

  if (currentPosition < targetPosition) {
    currentPosition++;

    smallBlock.style.left = currentPosition + "px";

    requestAnimationFrame(function () {
      moveChildBlock(targetPosition, currentPosition);
    });
  }
}
moveChildBlock(450, 0);
