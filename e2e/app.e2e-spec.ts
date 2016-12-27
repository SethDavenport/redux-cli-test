import { ReduxCliTestPage } from './app.po';

describe('redux-cli-test App', function() {
  let page: ReduxCliTestPage;

  beforeEach(() => {
    page = new ReduxCliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
