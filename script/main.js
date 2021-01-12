let computerBallDoc = document.querySelector("#computerBall");
let userBallDoc = document.querySelector("#userBall");
let computerChoose = document.querySelector("#computerChoose");
let userChoose = document.querySelector("#userChoose");
let result = document.querySelector("#result");
let randomElementForComputer = 0;
let randomElementForUser = 0;
let computerBall = 0;
let userBall = 0;
let rockScissorPaper = ["img/paper.png", "img/scissors.png", "img/rock.png"];

function play() {
          randomElementForComputer = Number((Math.random() * 2).toFixed());
          computerChoose.setAttribute("src", `${rockScissorPaper[randomElementForComputer]}`);
          randomElementForUser = Number((Math.random() * 2).toFixed());

          computerElementName = computerChoose.getAttribute("src");
          userElementName = userChoose.getAttribute("src");
          if (computerElementName == "img/paper.png" && userElementName == "img/rock.png") {
                    computerBall += 1;
                    result.innerHTML = "You Lose! :(";
                    result.style.fontSize = "5px";
                    result.style.color = "red";
                    result.style.fontSize = "40px";
          } else if (computerElementName == "img/scissors.png" && userElementName == "img/rock.png") {
                    userBall += 1;
                    result.innerHTML = "You Win! :)";
                    result.style.fontSize = "5px";
                    result.style.color = "green";
                    result.style.fontSize = "45px";
          } else if (computerElementName == "img/rock.png" && userElementName == "img/paper.png") {
                    userBall += 1;
                    result.innerHTML = "You Win! :)";
                    result.style.fontSize = "5px";
                    result.style.color = "green";
                    result.style.fontSize = "45px";
          } else if (computerElementName == "img/rock.png" && userElementName == "img/scissors.png") {
                    computerBall += 1;
                    result.innerHTML = "You Lose! :(";
                    result.style.fontSize = "5px";
                    result.style.color = "red";
                    result.style.fontSize = "40px";
          } else if (computerElementName == "img/paper.png" && userElementName == "img/scissors.png") {
                    userBall += 1;
                    result.innerHTML = "You Win! :)";
                    result.style.fontSize = "5px";
                    result.style.color = "green";
                    result.style.fontSize = "45px";
          } else if (computerElementName == "img/scissors.png" && userElementName == "img/paper.png") {
                    computerBall += 1;
                    result.innerHTML = "You Lose! :(";
                    result.style.fontSize = "5px";
                    result.style.color = "red";
                    result.style.fontSize = "40px";
          } else {
                    result.innerHTML = "Draw! Try again to beat! :)";
                    result.style.fontSize = "5px";
                    result.style.color = "#fff";
                    result.style.fontSize = "35px";
          }

          computerBallDoc.innerHTML = computerBall;
          userBallDoc.innerHTML = userBall;
}

function paper() {
          userChoose.setAttribute("src", "img/paper.png");
}
function rock() {
          userChoose.setAttribute("src", "img/rock.png");
}
function scissors() {
          userChoose.setAttribute("src", "img/scissors.png");
}
