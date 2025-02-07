import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesCaruselComponent } from './examples-carusel.component';

describe('ExamplesCaruselComponent', () => {
  let component: ExamplesCaruselComponent;
  let fixture: ComponentFixture<ExamplesCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamplesCaruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplesCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});