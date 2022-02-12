import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticHomeComponent } from './static-home.component';

describe('StaticHomeComponent', () => {
  let component: StaticHomeComponent;
  let fixture: ComponentFixture<StaticHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
