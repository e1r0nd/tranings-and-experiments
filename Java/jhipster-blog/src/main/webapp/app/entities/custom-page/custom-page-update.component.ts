import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICustomPage, CustomPage } from 'app/shared/model/custom-page.model';
import { CustomPageService } from './custom-page.service';

@Component({
  selector: 'jhi-custom-page-update',
  templateUrl: './custom-page-update.component.html',
})
export class CustomPageUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    title: [null, [Validators.required, Validators.minLength(3)]],
    link: [null, [Validators.required, Validators.minLength(6)]],
    content: [],
  });

  constructor(protected customPageService: CustomPageService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ customPage }) => {
      this.updateForm(customPage);
    });
  }

  updateForm(customPage: ICustomPage): void {
    this.editForm.patchValue({
      id: customPage.id,
      title: customPage.title,
      link: customPage.link,
      content: customPage.content,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const customPage = this.createFromForm();
    if (customPage.id !== undefined) {
      this.subscribeToSaveResponse(this.customPageService.update(customPage));
    } else {
      this.subscribeToSaveResponse(this.customPageService.create(customPage));
    }
  }

  private createFromForm(): ICustomPage {
    return {
      ...new CustomPage(),
      id: this.editForm.get(['id'])!.value,
      title: this.editForm.get(['title'])!.value,
      link: this.editForm.get(['link'])!.value,
      content: this.editForm.get(['content'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICustomPage>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
