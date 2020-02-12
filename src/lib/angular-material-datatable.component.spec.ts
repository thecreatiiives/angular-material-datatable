import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialDatatableComponent } from './angular-material-datatable.component';

describe('AngularMaterialDatatableComponent', () => {
  let component: AngularMaterialDatatableComponent;
  let fixture: ComponentFixture<AngularMaterialDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
