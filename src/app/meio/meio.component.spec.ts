import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeioComponent } from './meio.component';

describe('MeioComponent', () => {
  let component: MeioComponent;
  let fixture: ComponentFixture<MeioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
