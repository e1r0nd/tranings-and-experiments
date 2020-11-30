import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterblogSharedModule } from 'app/shared/shared.module';
import { CustomPageComponent } from './custom-page.component';
import { CustomPageDetailComponent } from './custom-page-detail.component';
import { CustomPageUpdateComponent } from './custom-page-update.component';
import { CustomPageDeleteDialogComponent } from './custom-page-delete-dialog.component';
import { customPageRoute } from './custom-page.route';

@NgModule({
  imports: [JhipsterblogSharedModule, RouterModule.forChild(customPageRoute)],
  declarations: [CustomPageComponent, CustomPageDetailComponent, CustomPageUpdateComponent, CustomPageDeleteDialogComponent],
  entryComponents: [CustomPageDeleteDialogComponent],
})
export class JhipsterblogCustomPageModule {}
