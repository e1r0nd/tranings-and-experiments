import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { JhipsterblogTestModule } from '../../../test.module';
import { CustomPageUpdateComponent } from 'app/entities/custom-page/custom-page-update.component';
import { CustomPageService } from 'app/entities/custom-page/custom-page.service';
import { CustomPage } from 'app/shared/model/custom-page.model';

describe('Component Tests', () => {
  describe('CustomPage Management Update Component', () => {
    let comp: CustomPageUpdateComponent;
    let fixture: ComponentFixture<CustomPageUpdateComponent>;
    let service: CustomPageService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterblogTestModule],
        declarations: [CustomPageUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CustomPageUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CustomPageUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CustomPageService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CustomPage(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new CustomPage();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
