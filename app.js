let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#0d6efd";
tg.MainButton.show();

let item = "";
let message = `Имя: `;


Telegram.WebApp.onEvent("mainButtonClicked", function () {
//   alert("WOW");
  const input = document.getElementByName("name");
  message += `${input.value}`;
  tg.sendData(message);
});
