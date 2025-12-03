//Todos los métodos enlazados a Page
import { Page, expect } from "@playwright/test";

export class BasePage {

    protected readonly page: Page;
    
    constructor(page:Page) {
        this.page= page;
    }


    async loadPage(url: string){
        await this.page.goto(url);
    };

    async clickOn(selector: string){
        await this.page.locator(selector).click();
    };

    async fillField(selector: string, value: string){
        await this.page.locator(selector).fill(value);
    }

    async selectOption(selector: string, value:string){
        await this.page.locator(selector).selectOption(value);
    }

    async expected(selector: string){
        await expect(this.page.locator(selector)).toBeVisible;
    }
}