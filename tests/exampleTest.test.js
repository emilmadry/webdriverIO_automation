import examplePage from '../pages/examplePage.page'; 

const { expect } = require('chai');

describe('It will test Accuweather', () => {


    beforeEach(() => {
        browser.url('https://www.accuweather.com/');
    });

    const testName = 'Accuweather';

    it(`${testName} - current country`, () => {
        console.log(`Starting test: ${testName} - current country`);
        browser.waitForVisible(examplePage.logo.selector, 5000);
        browser.waitForVisible(examplePage.locator.selector, 5000);
        expect(browser.getText(examplePage.currentCountry.selector)).to.include('Poland', 'Value incorrect');
    });

    it(`${testName} - find city`, () => {
        console.log(`Starting test: ${testName} - find city`);
        browser.waitForVisible(examplePage.logo.selector, 5000);
        browser.waitForVisible(examplePage.locator.selector, 5000);
        examplePage.findCity('Helsinki');
        browser.waitForVisible(examplePage.currentForecastHeader.selector, 5000);
        browser.waitForVisible(examplePage.currentForecast.selector, 5000);
        browser.waitForVisible(examplePage.currentCountry.selector, 5000);
        expect(browser.getText(examplePage.currentCountry.selector)).to.include('Finland', 'Value incorrect');
    });

});
