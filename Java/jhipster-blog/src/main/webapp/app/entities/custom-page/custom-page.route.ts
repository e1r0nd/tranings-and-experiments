import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICustomPage, CustomPage } from 'app/shared/model/custom-page.model';
import { CustomPageService } from './custom-page.service';
import { CustomPageComponent } from './custom-page.component';
import { CustomPageDetailComponent } from './custom-page-detail.component';
import { CustomPageUpdateComponent } from './custom-page-update.component';

@Injectable({ providedIn: 'root' })
export class CustomPageResolve implements Resolve<ICustomPage> {
  constructor(private service: CustomPageService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICustomPage> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((customPage: HttpResponse<CustomPage>) => {
          if (customPage.body) {
            return of(customPage.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CustomPage());
  }
}

export const customPageRoute: Routes = [
  {
    path: '',
    component: CustomPageComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'jhipsterblogApp.customPage.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CustomPageDetailComponent,
    resolve: {
      customPage: CustomPageResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'jhipsterblogApp.customPage.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CustomPageUpdateComponent,
    resolve: {
      customPage: CustomPageResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'jhipsterblogApp.customPage.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CustomPageUpdateComponent,
    resolve: {
      customPage: CustomPageResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'jhipsterblogApp.customPage.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
