import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTargetSourceComponent } from './input-target-source.component';

describe('InputTargetSourceComponent', () => {
  let component: InputTargetSourceComponent;
  let fixture: ComponentFixture<InputTargetSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTargetSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTargetSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
