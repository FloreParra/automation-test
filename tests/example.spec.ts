import { test } from '@playwright/test';
import { BasicPage } from "../pages/BasicPage";
import { BookingPage } from "../pages/BookingPage";
import { BookingLocators } from "../locators/bookingLocators";

test('Balzedemo', async ({ page }) => {


  const booking = new BookingPage(page);
  const basic = new BasicPage(page);

  await basic.loadPage(BookingLocators.mainUrl);
  await booking.title();
  await booking.selectDestiny();
  await booking.chooseFlight();
  await booking.completeInfo();
  await booking.bookingConfirmation();

});
