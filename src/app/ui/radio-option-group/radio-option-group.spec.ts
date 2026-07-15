import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOptionGroup } from './radio-option-group';

describe('RadioOptionGroup', () => {
  let component: RadioOptionGroup;
  let fixture: ComponentFixture<RadioOptionGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioOptionGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioOptionGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
