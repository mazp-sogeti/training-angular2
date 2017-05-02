import { NamykPage } from './app.po';

describe('namyk App', () => {
  let page: NamykPage;

  beforeEach(() => {
    page = new NamykPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
