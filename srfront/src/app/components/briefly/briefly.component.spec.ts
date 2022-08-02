import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrieflyComponent } from './briefly.component';

describe('BrieflyComponent', () => {
  let component: BrieflyComponent;
  let fixture: ComponentFixture<BrieflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrieflyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrieflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
