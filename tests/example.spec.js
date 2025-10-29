// @ts-check
import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://app.vivo.com.br/web/timeout');
//   await page.getByTestId('test-button-primary-timeout-session').click();
//   await page.getByRole('textbox', { name: 'CPF' }).click();
//   await page.getByRole('textbox', { name: 'CPF' }).fill('36.637.938-858');
//   await page.getByText('Sua sessão expirou Continuar').click();
//   await page.getByRole('textbox', { name: 'Senha' }).fill('17100469');
//   await page.getByRole('textbox', { name: 'Senha' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Senha' }).fill('17100469Fatec@');
//   await page.getByRole('button', { name: 'Continuar' }).click();
//   await expect(page.getByTestId('Text2')).toContainText('João Pedro Varella');
// });

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
