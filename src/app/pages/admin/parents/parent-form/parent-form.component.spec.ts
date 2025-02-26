import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFormComponent } from './parent-form.component';

describe('ParentFormComponent', () => {
  let component: ParentFormComponent;
  let fixture: ComponentFixture<ParentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
