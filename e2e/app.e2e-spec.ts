import { MockupPage } from './app.po';

describe('mockup App', function() {
  let page: MockupPage;

  beforeEach(() => {
    page = new MockupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
