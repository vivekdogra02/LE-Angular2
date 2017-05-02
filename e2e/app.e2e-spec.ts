import { LearnerExperiencePage } from './app.po';

describe('learner-experience App', () => {
  let page: LearnerExperiencePage;

  beforeEach(() => {
    page = new LearnerExperiencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
