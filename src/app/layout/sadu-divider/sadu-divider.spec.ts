import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaduDivider } from './sadu-divider';

describe('SaduDivider', () => {
  let component: SaduDivider;
  let fixture: ComponentFixture<SaduDivider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaduDivider],
    }).compileComponents();

    fixture = TestBed.createComponent(SaduDivider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
