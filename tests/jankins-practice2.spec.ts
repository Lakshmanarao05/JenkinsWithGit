import {test, expect} from '@playwright/test';
test('Practice Test 4', async({page}) =>{
    console.log("Starting Practice Test 4...");
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    console.log("Ending Practice Test4...")
})
test('Practice Test 5', async({page}) =>{
    console.log("Starting Practice Test 5...");
    await page.goto('https://www.google.com/');
    console.log(page.url());
    await expect(page).toHaveURL('https://www.google.com/wrong')
    console.log("Ending Practice Test5...")
})
test('Practice Test 6', async({page}) =>{
    console.log("Starting Practice Test 6...");
    await page.goto('https://www.google.com/');
    await expect(page.getByRole('button', { name: 'Google Search' })).toHaveValue('Google Search');
    console.log("Ending Practice Test6...")
})