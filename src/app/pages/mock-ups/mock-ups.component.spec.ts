import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockUpsComponent } from './mock-ups.component';

describe('MockUpsComponent', () => {
  let component: MockUpsComponent;
  let fixture: ComponentFixture<MockUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockUpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
