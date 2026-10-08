const { test, expect } = require('@playwright/test');

test('CT02 - Aplicação de cupom válido', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');

  // Adiciona 1 unidade da Calça Jeans Slim (P002)
  const produto = page.getByText('Calça Jeans Slim');
  await expect(produto).toBeVisible();

  const cardProduto = produto.locator('..');
  await cardProduto.getByRole('button', { name: /adicionar/i }).click();

  // Acessa o carrinho
  await page.getByRole('link', { name: /carrinho/i }).click();

  // Aplica o cupom válido
  await page.getByLabel(/cupom/i).fill('BEMVINDO10');
  await page.getByRole('button', { name: /aplicar/i }).click();

  // Valida os valores do resumo
  await expect(page.locator('[data-valor="subtotal"]')).toHaveText('R$ 139,90');
  await expect(page.locator('[data-valor="desconto"]')).toHaveText('- R$ 13,99');
  await expect(page.locator('[data-valor="frete"]')).toHaveText('R$ 19,90');
  await expect(page.locator('[data-valor="total"]')).toHaveText('R$ 145,81');
});


test('CT06 - Cupom expirado', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');

  // Adiciona 1 unidade da Calça Jeans Slim (P002)
  const produto = page.getByText('Calça Jeans Slim');
  await expect(produto).toBeVisible();

  const cardProduto = produto.locator('..');
  await cardProduto.getByRole('button', { name: /adicionar/i }).click();

  // Acessa o carrinho
  await page.getByRole('link', { name: /carrinho/i }).click();

  // Aplica o cupom expirado
  await page.getByLabel(/cupom/i).fill('VERAO2026');
  await page.getByRole('button', { name: /aplicar/i }).click();

  // Valida a mensagem de cupom expirado
  await expect(page.getByText('Cupom expirado.')).toBeVisible();

  // Valida que nenhum desconto foi aplicado
  await expect(page.locator('[data-valor="subtotal"]')).toHaveText('R$ 139,90');
  await expect(page.locator('[data-valor="desconto"]')).toHaveText('R$ 0,00');
  await expect(page.locator('[data-valor="frete"]')).toHaveText('R$ 19,90');
  await expect(page.locator('[data-valor="total"]')).toHaveText('R$ 159,80');
});


test('CT20 - Finalização do pedido com cupom de desconto', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');

  // Adiciona 1 unidade da Mochila Urbana 20L (P005)
  const produto = page.getByText('Mochila Urbana 20L');
  await expect(produto).toBeVisible();

  const cardProduto = produto.locator('..');
  await cardProduto.getByRole('button', { name: /adicionar/i }).click();

  // Acessa o carrinho
  await page.getByRole('link', { name: /carrinho/i }).click();

  // Aplica o cupom válido
  await page.getByLabel(/cupom/i).fill('BEMVINDO10');
  await page.getByRole('button', { name: /aplicar/i }).click();

  // Valida os valores do resumo
  await expect(page.locator('[data-valor="subtotal"]')).toHaveText('R$ 100,00');
  await expect(page.locator('[data-valor="desconto"]')).toHaveText('- R$ 10,00');
  await expect(page.locator('[data-valor="frete"]')).toHaveText('R$ 19,90');
  await expect(page.locator('[data-valor="total"]')).toHaveText('R$ 109,90');

  // Avança para a finalização do pedido
  await page.getByRole('link', { name: 'Finalizar compra' }).click();

  // Preenche os dados do cliente
  await page.getByLabel(/nome/i).fill('Maria Silva');
  await page.getByLabel(/e-mail/i).fill('maria@exemplo.com');
  await page.getByLabel(/cep/i).fill('01310-100');

  // Confirma o pedido
  await page.getByRole('button', { name: /confirmar pedido/i }).click();

  // Valida a confirmação do pedido
  await expect(page.getByText(/pedido confirmado/i)).toBeVisible();
});