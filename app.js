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
alert(document);
console.log("LOL");
alert(document.getElementById("name"));
Telegram.WebApp.onEvent("mainButtonClicked", function () {
//   alert("WOW");
     const input = document.getElementById("name");
     message += `${input.value}`;
     alert(message);
  console.log("LOL");
  tg.sendData(message);
});
