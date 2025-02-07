import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkSubmitComponent } from './homework-submit.component';

describe('HomeworkSubmitComponent', () => {
  let component: HomeworkSubmitComponent;
  let fixture: ComponentFixture<HomeworkSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeworkSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworkSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
