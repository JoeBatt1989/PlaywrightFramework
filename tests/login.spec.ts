import { test, expect } from '@playwright/test';
import { LoginPage } from './PageObjects/LoginPage';

test('valid user should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce')
    const title = await loginPage.getTitle();
    expect(title).toBe('Swag Labs');
});