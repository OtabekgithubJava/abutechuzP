import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFormComponent } from './exam-form.component';

describe('ExamFormComponent', () => {
  let component: ExamFormComponent;
  let fixture: ComponentFixture<ExamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
