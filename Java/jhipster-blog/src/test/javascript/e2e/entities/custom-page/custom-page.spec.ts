import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CustomPageComponentsPage, CustomPageDeleteDialog, CustomPageUpdatePage } from './custom-page.page-object';

const expect = chai.expect;

describe('CustomPage e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let customPageComponentsPage: CustomPageComponentsPage;
  let customPageUpdatePage: CustomPageUpdatePage;
  let customPageDeleteDialog: CustomPageDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load CustomPages', async () => {
    await navBarPage.goToEntity('custom-page');
    customPageComponentsPage = new CustomPageComponentsPage();
    await browser.wait(ec.visibilityOf(customPageComponentsPage.title), 5000);
    expect(await customPageComponentsPage.getTitle()).to.eq('jhipsterblogApp.customPage.home.title');
    await browser.wait(ec.or(ec.visibilityOf(customPageComponentsPage.entities), ec.visibilityOf(customPageComponentsPage.noResult)), 1000);
  });

  it('should load create CustomPage page', async () => {
    await customPageComponentsPage.clickOnCreateButton();
    customPageUpdatePage = new CustomPageUpdatePage();
    expect(await customPageUpdatePage.getPageTitle()).to.eq('jhipsterblogApp.customPage.home.createOrEditLabel');
    await customPageUpdatePage.cancel();
  });

  it('should create and save CustomPages', async () => {
    const nbButtonsBeforeCreate = await customPageComponentsPage.countDeleteButtons();

    await customPageComponentsPage.clickOnCreateButton();

    await promise.all([
      customPageUpdatePage.setTitleInput('title'),
      customPageUpdatePage.setLinkInput('link'),
      customPageUpdatePage.setContentInput('content'),
    ]);

    expect(await customPageUpdatePage.getTitleInput()).to.eq('title', 'Expected Title value to be equals to title');
    expect(await customPageUpdatePage.getLinkInput()).to.eq('link', 'Expected Link value to be equals to link');
    expect(await customPageUpdatePage.getContentInput()).to.eq('content', 'Expected Content value to be equals to content');

    await customPageUpdatePage.save();
    expect(await customPageUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await customPageComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last CustomPage', async () => {
    const nbButtonsBeforeDelete = await customPageComponentsPage.countDeleteButtons();
    await customPageComponentsPage.clickOnLastDeleteButton();

    customPageDeleteDialog = new CustomPageDeleteDialog();
    expect(await customPageDeleteDialog.getDialogTitle()).to.eq('jhipsterblogApp.customPage.delete.question');
    await customPageDeleteDialog.clickOnConfirmButton();

    expect(await customPageComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
