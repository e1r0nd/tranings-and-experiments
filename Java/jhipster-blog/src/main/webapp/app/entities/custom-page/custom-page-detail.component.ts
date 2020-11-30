import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICustomPage } from 'app/shared/model/custom-page.model';

@Component({
  selector: 'jhi-custom-page-detail',
  templateUrl: './custom-page-detail.component.html',
})
export class CustomPageDetailComponent implements OnInit {
  customPage: ICustomPage | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ customPage }) => (this.customPage = customPage));
  }

  previousState(): void {
    window.history.back();
  }
}
