let messages = [];
let startIndex = 0;
let looperStatus = true;
let showTime = 0;

function showMessage() {
  if (messages.length == 0) {
    looperStatus = false;
    return;
  }

  playAudio();

  const activeMessage = document.querySelector("#active-message");

  activeMessage.style.display = "";
  activeMessage.querySelector("#price").innerHTML = messages[startIndex].price;
  activeMessage.querySelector("#from").innerHTML = messages[startIndex].from;
  activeMessage.querySelector("#message").innerHTML =
    messages[startIndex].message;

  setTimeout(() => {
    if (messages.length > startIndex) {
      showMessage();
      looperStatus = true;
    }
    clearMessage();
    looperStatus = false;
  }, messages[startIndex].time);

  startIndex = startIndex + 1;
}

function clearMessage() {
  document.getElementById("active-message").style.display = "none";
}

function playAudio() {
  document.getElementById("audio").play();
}

function newMessage(message, from) {
  setTimeout(() => {
    messages.push({
      time: 10000,
      price: 10000,
      from: from ?? "Someone",
      message: message ?? "",
    });
    if (looperStatus == false) {
      showMessage();
      looperStatus = true;
    }
  }, 1000);
}

function run() {
  showMessage();
}

run();
