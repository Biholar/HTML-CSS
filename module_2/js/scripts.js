bt_buy.onclick = myFunction;

function myFunction() {
  var message;
  const adress = prompt("Ener your adress");
  if (!adress) {
    alert("Noting buy");
  } else {
    alert(`Your order will sent in: ${adress} `);
  }
}