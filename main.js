const products = document.querySelectorAll(".item");
const totalSum = document.querySelector(".sum");
totalSum.textContent = 0;

function totalCounting() {
  orderSum = 0;
  for (const product of products) {
    let checkboxElem = product.querySelector('input[type="checkbox"]');
    let amountElem = product.querySelector('input[type="number"]');
    if (checkboxElem.checked) {
      if (amountElem.value <= 0 || amountElem.value > 100) {
        amountElem.value = 1;
      }
      orderSum +=
        parseInt(checkboxElem.dataset.price) * parseInt(amountElem.value);
    } else {
      amountElem.value = 0;
    }
    totalSum.textContent = orderSum;
  }
}

function orderConfirmation() {
  let clientName = document.querySelector(".name").value;
  let clientSurname = document.querySelector(".surname").value;
  orderList = [];
  for (const product of products) {
    let checkboxElem = product.querySelector('input[type="checkbox"]');
    let amountElem = product.querySelector('input[type="number"]');
    if (checkboxElem.checked) {
      orderSumPosition =
        parseInt(checkboxElem.dataset.price) * parseInt(amountElem.value);
      productName = checkboxElem.dataset.goods;
      position = `${productName} - ${amountElem.value} шт. = ${orderSumPosition} р.`;
      orderList.push(position);
    }
  }
  if (clientName == "" && clientSurname == "") {
    orderer = "";
  } else {
    orderer = `Заказчик: ${clientName} ${clientSurname}\n\n`;
  }

  if (clientSurname == "") {
    alert("Введите фамилию!");
  } else if (clientName == "") {
    alert("Введите имя!");
  } else if (orderList == false) {
    alert("Выберете товар!");
  } else {
    alert(
      `${orderer}Ваш заказ:\n${orderList.join("\n")}\n\nИтого: ${
        totalSum.textContent
      } руб.`
    );
  }
}
