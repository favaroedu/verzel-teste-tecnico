
const { expect } = require('@playwright/test');

async function goToHomePage(page, url) {
  await page.goto(url);
}

async function addProduct(page, productName, quantity = 1) {
  const product = page.getByText(productName);
  await expect(product).toBeVisible();

  const productCard = product.locator('..');
  const addButton = productCard.getByRole('button', { name: /adicionar/i });

  for (let i = 0; i < quantity; i++) {
    await addButton.click();
  }
}

async function openCart(page) {
  await page.getByRole('link', { name: /carrinho/i }).click();
}

async function applyCoupon(page, code) {
  await page.getByLabel(/cupom/i).fill(code);
  await page.getByRole('button', { name: /aplicar/i }).click();
}

async function verifyMessage(page, message) {
  await expect(page.getByText(message)).toBeVisible();
}

async function verifySummary(page, subtotal, discount, shipping, total) {
  await expect(page.locator('[data-valor="subtotal"]')).toHaveText(subtotal);
  await expect(page.locator('[data-valor="desconto"]')).toHaveText(discount);
  await expect(page.locator('[data-valor="frete"]')).toHaveText(shipping);
  await expect(page.locator('[data-valor="total"]')).toHaveText(total);
}

async function verifyQuantityLimit(page, productName) {
  await verifyMessage(page, 'Limite de 5 unidades por produto.');

  const quantityGroup = page.getByRole('group', {
    name: `Quantidade de ${productName}`
  });

  await expect(quantityGroup.getByRole('status')).toHaveText('5');

  await expect(
    quantityGroup.getByRole('button', {
      name: `Aumentar quantidade de ${productName}`
    })
  ).toBeDisabled();
}

async function fillCustomerData(page) {
  await page.getByLabel(/nome/i).fill('Maria Silva');
  await page.getByLabel(/e-mail/i).fill('maria@exemplo.com');
  await page.getByLabel(/cep/i).fill('01310-100');
}

async function confirmOrder(page) {
  await page.getByRole('button', { name: /confirmar pedido/i }).click();
  await verifyMessage(page, /pedido confirmado/i);
}

async function proceedToCheckout(page) {
  await page.getByRole('link', { name: 'Finalizar compra' }).click();
}

module.exports = {
  goToHomePage,
  addProduct,
  openCart,
  applyCoupon,
  verifyMessage,
  verifySummary,
  verifyQuantityLimit,
  fillCustomerData,
  confirmOrder,
  proceedToCheckout
};
