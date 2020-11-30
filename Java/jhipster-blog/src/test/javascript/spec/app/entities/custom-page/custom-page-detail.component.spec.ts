import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhipsterblogTestModule } from '../../../test.module';
import { CustomPageDetailComponent } from 'app/entities/custom-page/custom-page-detail.component';
import { CustomPage } from 'app/shared/model/custom-page.model';

describe('Component Tests', () => {
  describe('CustomPage Management Detail Component', () => {
    let comp: CustomPageDetailComponent;
    let fixture: ComponentFixture<CustomPageDetailComponent>;
    const route = ({ data: of({ customPage: new CustomPage(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterblogTestModule],
        declarations: [CustomPageDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CustomPageDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CustomPageDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load customPage on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.customPage).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
