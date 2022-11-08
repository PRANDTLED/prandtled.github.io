let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#0d6efd";
tg.MainButton.show();

let item = "";
let message = `Имя: `;

// document.getElementById("tg").addEventListener("submit", function (e) {
//   e.preventDefault();
//   message += `<b>Отправитель: </b> ${this.name.value}\n`;
//   message += `<b>Почта: </b> ${this.email.value}\n`;
//   message += `<b>UserId: </b> ${tg.initDataUnsafe.user.id}`;
// });

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  const input = document.getElementById("name"); // Извлекаем элемент input
  message += `${input.value}`;
  tg.sendData(message);
});
