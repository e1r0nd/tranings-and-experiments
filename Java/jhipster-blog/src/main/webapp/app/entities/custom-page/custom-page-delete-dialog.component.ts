import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICustomPage } from 'app/shared/model/custom-page.model';
import { CustomPageService } from './custom-page.service';

@Component({
  templateUrl: './custom-page-delete-dialog.component.html',
})
export class CustomPageDeleteDialogComponent {
  customPage?: ICustomPage;

  constructor(
    protected customPageService: CustomPageService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.customPageService.delete(id).subscribe(() => {
      this.eventManager.broadcast('customPageListModification');
      this.activeModal.close();
    });
  }
}
