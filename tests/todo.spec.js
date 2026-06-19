import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('need to go walk ');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('do smart work');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('code hard');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('playwright mini project');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'need to go walk' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('listitem').filter({ hasText: 'do smart work' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('listitem').filter({ hasText: 'code hard' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await page.getByRole('link', { name: 'Active' }).click();

});