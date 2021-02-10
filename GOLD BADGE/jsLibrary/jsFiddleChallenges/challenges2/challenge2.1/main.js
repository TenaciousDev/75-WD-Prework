function setVariables() {
  let store = document.querySelector("#store").value;
  let product = document.querySelector("#product").value;
  let quantity = document.querySelector("#quantity").value;
  console.log(`I went to ${store} to buy ${quantity} ${product}`);
  let text = `I went to ${store} to buy ${quantity} ${product}`;
  let result = document.querySelector(".result");
  let containsText = document.createElement("p");
  containsText.innerText = text;
  result.appendChild(containsText);
}
