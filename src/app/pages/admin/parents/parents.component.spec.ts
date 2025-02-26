import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsComponent } from './parents.component';

describe('ParentsComponent', () => {
  let component: ParentsComponent;
  let fixture: ComponentFixture<ParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
