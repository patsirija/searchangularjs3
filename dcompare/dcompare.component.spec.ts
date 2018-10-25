import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcompareComponent } from './dcompare.component';

describe('DcompareComponent', () => {
  let component: DcompareComponent;
  let fixture: ComponentFixture<DcompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
