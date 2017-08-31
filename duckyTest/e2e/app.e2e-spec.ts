import { DuckyTestPage } from './app.po';

describe('ducky-test App', () => {
  let page: DuckyTestPage;

  beforeEach(() => {
    page = new DuckyTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
