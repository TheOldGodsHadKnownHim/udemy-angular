import { AngularEssentialsPage } from './app.po';

describe('angular-essentials App', () => {
  let page: AngularEssentialsPage;

  beforeEach(() => {
    page = new AngularEssentialsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
