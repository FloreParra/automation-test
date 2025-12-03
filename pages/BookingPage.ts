import { BasicPage } from "./BasicPage";
import { BookingLocators } from "../locators/bookingLocators";
import { Page, Locator } from "@playwright/test";

export class BookingPage extends BasicPage{

    private readonly landingTitle: Locator;
    private readonly fromPort: Locator;
    private readonly toPort: Locator;
    private readonly submitbutton: Locator;
    private readonly name: Locator;
    private readonly flight: Locator;
    private readonly address: Locator;
    private readonly city: Locator;
    private readonly state: Locator;
    private readonly zipCode: Locator;
    private readonly cardType: Locator;
    private readonly creditCardNumer: Locator;
    private readonly creditCardYear: Locator;
    private readonly creditCardMonth: Locator;
    private readonly creditCardName: Locator;
    private readonly expectedResult: Locator;

constructor(page: Page){
    super(page);
    this.landingTitle= page.locator(BookingLocators.landingTitle);
    this.fromPort = page.locator(BookingLocators.fromPort);
    this.toPort = page.locator(BookingLocators.toPort);
    this.submitbutton = page.locator(BookingLocators.submitButton);
    this.name = page.locator(BookingLocators.name);
    this.flight = page.locator(BookingLocators.flight);
    this.address = page.locator(BookingLocators.address);
    this.city = page.locator(BookingLocators.city);
    this.state = page.locator(BookingLocators.state);
    this.zipCode = page.locator(BookingLocators.zipCode);
    this.cardType = page.locator(BookingLocators.cardType);
    this.creditCardNumer = page.locator(BookingLocators.creditCardNumber);
    this.creditCardYear = page.locator(BookingLocators.creditCardYear);
    this.creditCardMonth = page.locator(BookingLocators.creditCardMonth);
    this.creditCardName = page.locator(BookingLocators.creditCardName);
    this.expectedResult = page.locator(BookingLocators.expectedResults);

}

    async title(){
        this.expected(BookingLocators.landingTitle);
    }

    async selectDestiny() {
        this.selectOption(BookingLocators.fromPort,"Paris"),
        this.selectOption(BookingLocators.toPort,"Buenos Aires"),
        this.clickOn(BookingLocators.submitButton);
    }

    async chooseFlight(){
        this.clickOn(BookingLocators.flight);
    }

    async completeInfo(){
        this.fillField(BookingLocators.name,"Florencia"),
        this.fillField(BookingLocators.address,"Calle falsa 123"),
        this.fillField(BookingLocators.city,"La Plata"),
        this.fillField(BookingLocators.state,"Buenos Aires"),
        this.fillField(BookingLocators.zipCode,"123"),
        this.selectOption(BookingLocators.cardType,"amex"),
        this.fillField(BookingLocators.creditCardNumber,"123456"),
        this.fillField(BookingLocators.creditCardYear,"2030"),
        this.fillField(BookingLocators.creditCardMonth,"11"),
        this.fillField(BookingLocators.creditCardName,"Pepito");
    };

    async bookingConfirmation(){
        this.expected(BookingLocators.expectedResults);
    }
}

