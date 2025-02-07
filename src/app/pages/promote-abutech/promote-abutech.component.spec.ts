import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteAbutechComponent } from './promote-abutech.component';

describe('PromoteAbutechComponent', () => {
  let component: PromoteAbutechComponent;
  let fixture: ComponentFixture<PromoteAbutechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoteAbutechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoteAbutechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
