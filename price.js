const priceElement = document.getElementById('price');

function updatePrice() {
  const fluctuation = (Math.random() - 0.5) * 0.005;
  const price = 0.53 + fluctuation;
  priceElement.textContent = `Current Price: $${price.toFixed(5)}`;
}

setInterval(updatePrice, 100);
