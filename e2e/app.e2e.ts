import { AngularSamplePage } from './app.po';

describe('angular-sample App', function() {
  let page: AngularSamplePage;

  beforeEach(() => {
    page = new AngularSamplePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-sample works!');
  });
});
