import { ReactiveAngularAppPage } from './app.po';

describe('reactive-angular-app App', () => {
  let page: ReactiveAngularAppPage;

  beforeEach(() => {
    page = new ReactiveAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
