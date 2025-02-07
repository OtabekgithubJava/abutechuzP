import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAbutechComponent } from './about-abutech.component';

describe('AboutAbutechComponent', () => {
  let component: AboutAbutechComponent;
  let fixture: ComponentFixture<AboutAbutechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutAbutechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAbutechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
