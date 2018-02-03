import examplePage from '../pages/examplePage.page'; 

const { expect } = require('chai');

describe('It will test accu weather', () => {


    beforeEach(() => {
        browser.url('https://www.accuweather.com/');
    });

    const testName = 'Accuweather';

    it(`${testName} - current country`, () => {
        console.log(`Starting test: ${testName} - current country`);
        browser.waitForVisible('#header-logo', 5000);
        browser.waitForVisible(examplePage.locator.selector, 5000);
        expect(browser.getText(examplePage.currentCountry.selector)).to.include('Poland', 'Value incorrect');
    });

    const currentCountry = '.current-country';
    it(`${testName} - find city`, () => {
        console.log(`Starting test: ${testName} - find city`);
        browser.waitForVisible('#header-logo', 5000);
        browser.waitForVisible(examplePage.locator.selector, 5000);
        examplePage.findCity('Helsinki');
        browser.waitForVisible('#header', 5000);
        browser.waitForVisible(currentCountry, 5000);
        expect(browser.getText(currentCountry)).to.include('Finland', 'Value incorrect');
    });
});
