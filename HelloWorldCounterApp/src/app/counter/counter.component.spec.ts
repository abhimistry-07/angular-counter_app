import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should increase count when the button is clicked', () => {
  //   const initialCount = component.count;
  //   const button = fixture.nativeElement.querySelector('button');
  //   button.click();
  //   fixture.detectChanges();
  //   expect(component.count).toBe(initialCount + 1);
  // });

  it('should increment the count when the increment button is clicked', () => {
    component.increaseCount();
    expect(component.count).toBe(1);
  });

  it('should decrement the count when the decrement button is clicked', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  });

  it('should reset the count when the reset button is clicked', () => {
    component.count = 5;
    component.reset();
    expect(component.count).toBe(0);
  });
});
