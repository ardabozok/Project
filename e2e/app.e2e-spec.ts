import { ProjectsPage } from './app.po';

describe('projects App', () => {
  let page: ProjectsPage;

  beforeEach(() => {
    page = new ProjectsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
