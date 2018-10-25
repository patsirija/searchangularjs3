import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlistComponent } from './inlist.component';

describe('InlistComponent', () => {
  let component: InlistComponent;
  let fixture: ComponentFixture<InlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
