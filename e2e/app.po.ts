export class AngularSamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-sample-app h1')).getText();
  }
}
