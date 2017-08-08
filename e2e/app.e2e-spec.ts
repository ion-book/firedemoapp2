import { Firedemoapp2Page } from './app.po';

describe('firedemoapp2 App', () => {
  let page: Firedemoapp2Page;

  beforeEach(() => {
    page = new Firedemoapp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
