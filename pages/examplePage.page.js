class ExamplePage {

    get locator() {
        return $('#home');
    }
  
    get header() {
        return this.locator.$('#header');
    }
  
    get logo() {
        return this.header.$('#header-logo');
    }

    // due to change of class after switching country no parent locator
    get currentCountry() {
        return $('.current-country');
    }

    get citySearch() {
        return this.header.$('#findcity');
    }

    get inputCitySearch() {
        return this.citySearch.$('#s');
    }

    get btnCitySearch() {
        return this.citySearch.$('.bt-go');
    }

    get content() {
        return $('#content');
    }

    get listOfCities() {
        return this.content.$('.articles');
    }

    get currentForecast() {
        return $('#forecast-currently');
    }

    get currentForecastHeader() {
        return this.currentForecast.$('#header');
    }
  
  
    findCity(city) {
        this.header.waitForVisible(5000);
        browser.waitForVisible(this.inputCitySearch.selector, 5000);
        this.inputCitySearch.setValue(`${city}`);
        browser.waitForEnabled(this.btnCitySearch.selector, 5000);
        this.btnCitySearch.click();
        this.listOfCities.waitForVisible(5000);
        browser.element(this.listOfCities.selector).click(`*=${city}`);
        browser.waitForVisible(this.listOfCities.selector, 5000, true);
    }
  }
  
export default new ExamplePage();