import { AngularPwaPage } from './app.po';

describe('angular-pwa App', () => {
  let page: AngularPwaPage;

  beforeEach(() => {
    page = new AngularPwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
