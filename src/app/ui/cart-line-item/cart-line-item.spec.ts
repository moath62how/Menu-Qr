import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLineItem } from './cart-line-item';

describe('CartLineItem', () => {
  let component: CartLineItem;
  let fixture: ComponentFixture<CartLineItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartLineItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CartLineItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
