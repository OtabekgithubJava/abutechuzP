import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyStudyAtAbutechComponent } from './why-study-at-abutech.component';

describe('WhyStudyAtAbutechComponent', () => {
  let component: WhyStudyAtAbutechComponent;
  let fixture: ComponentFixture<WhyStudyAtAbutechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyStudyAtAbutechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyStudyAtAbutechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
