import { test } from '@playwright/test';

test('wikipedia', async ({ page }) => {
    // Google cookie decline
    const cookie_decline_button = 'Rechazar todo'

    const word_to_search = 'automatización'
    const wiki_word = 'automatización - wikipedia'

    await page.goto('https://www.google.es/');
    await page.getByRole('button', {name: cookie_decline_button}).click();
    // Let's search word automatización
    await page.getByRole('combobox', {name: 'Buscar'}).type(word_to_search);
    // Click to search
    await page.getByRole('combobox', {name: 'Buscar'}).press('Enter');
    // Click on wikipedia
    await page.getByRole('link').filter({ hasText: wiki_word }).click();
    // Take the picture;
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
  });