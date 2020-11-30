import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiParseLinks } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICustomPage } from 'app/shared/model/custom-page.model';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { CustomPageService } from './custom-page.service';
import { CustomPageDeleteDialogComponent } from './custom-page-delete-dialog.component';

@Component({
  selector: 'jhi-custom-page',
  templateUrl: './custom-page.component.html',
})
export class CustomPageComponent implements OnInit, OnDestroy {
  customPages: ICustomPage[];
  eventSubscriber?: Subscription;
  itemsPerPage: number;
  links: any;
  page: number;
  predicate: string;
  ascending: boolean;

  constructor(
    protected customPageService: CustomPageService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected parseLinks: JhiParseLinks
  ) {
    this.customPages = [];
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.page = 0;
    this.links = {
      last: 0,
    };
    this.predicate = 'id';
    this.ascending = true;
  }

  loadAll(): void {
    this.customPageService
      .query({
        page: this.page,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe((res: HttpResponse<ICustomPage[]>) => this.paginateCustomPages(res.body, res.headers));
  }

  reset(): void {
    this.page = 0;
    this.customPages = [];
    this.loadAll();
  }

  loadPage(page: number): void {
    this.page = page;
    this.loadAll();
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInCustomPages();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ICustomPage): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInCustomPages(): void {
    this.eventSubscriber = this.eventManager.subscribe('customPageListModification', () => this.reset());
  }

  delete(customPage: ICustomPage): void {
    const modalRef = this.modalService.open(CustomPageDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.customPage = customPage;
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected paginateCustomPages(data: ICustomPage[] | null, headers: HttpHeaders): void {
    const headersLink = headers.get('link');
    this.links = this.parseLinks.parse(headersLink ? headersLink : '');
    if (data) {
      for (let i = 0; i < data.length; i++) {
        this.customPages.push(data[i]);
      }
    }
  }
}
