
const { test } = require('@playwright/test');

const {
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
} = require('./comandos');

test('CT06 - Cupom expirado', async ({ page }) => {
  await goToHomePage(page, 'https://verzel-store.qa-test-verzel-store.workers.dev');
  await addProduct(page, 'Calça Jeans Slim');
  await openCart(page);
  await applyCoupon(page, 'VERAO2026');

  await verifyMessage(page, 'Cupom expirado.');

  await verifySummary(
    page,
    'R$ 139,90',
    'R$ 0,00',
    'R$ 19,90',
    'R$ 159,80'
  );
});

test('CT11 - Limite máximo de quantidade por produto', async ({ page }) => {
  await goToHomePage(page, 'https://verzel-store.qa-test-verzel-store.workers.dev');
  await addProduct(page, 'Calça Jeans Slim', 5);
  await openCart(page);
  await verifyQuantityLimit(page, 'Calça Jeans Slim');
});

test('CT20 - Finalização do pedido com cupom de desconto', async ({ page }) => {
  await goToHomePage(page, 'https://verzel-store.qa-test-verzel-store.workers.dev');
  await addProduct(page, 'Mochila Urbana 20L');
  await openCart(page);
  await applyCoupon(page, 'BEMVINDO10');

  await verifySummary(
    page,
    'R$ 100,00',
    '- R$ 10,00',
    'R$ 19,90',
    'R$ 109,90'
  );

  await proceedToCheckout(page);
  await fillCustomerData(page);
  await confirmOrder(page);
});
