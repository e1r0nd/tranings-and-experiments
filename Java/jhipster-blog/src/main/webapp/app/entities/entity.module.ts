import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'custom-page',
        loadChildren: () => import('./custom-page/custom-page.module').then(m => m.JhipsterblogCustomPageModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterblogEntityModule {}
