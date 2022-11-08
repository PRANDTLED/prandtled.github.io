let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#0d6efd";
tg.MainButton.show();

let item = "";
let message = `<b>Заявка с сайта</b>\n`;

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();
  message += `<b>Отправитель: </b> ${this.name.value}\n`;
  message += `<b>Почта: </b> ${this.email.value}\n`;
  message += `<b>UserId: </b> ${tg.initDataUnsafe.user.id}`;
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  name = document.getElementById('tg').this.name.value
  tg.sendData(name);
});
