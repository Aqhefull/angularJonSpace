import { AngularJonSpacePage } from './app.po';

describe('angular-jon-space App', () => {
  let page: AngularJonSpacePage;

  beforeEach(() => {
    page = new AngularJonSpacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
