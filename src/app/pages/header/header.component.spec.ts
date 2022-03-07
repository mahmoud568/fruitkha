import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  it('should create', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should toggle on openMenuBar() change isMenuBarOpen value', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    app.openMenuBar();
    expect(app.isMenuBarOpen).toEqual(true);
  });

  it('should toggle on buttu change isMenuBarOpen value', fakeAsync(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    spyOn(app, 'openMenuBar');
    let button = fixture.debugElement.nativeElement.querySelector('.navbar-toggler');
    button.click();
    expect(app.openMenuBar).toHaveBeenCalled();
  }));

  it('should show dropdown on hover', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    app.onHoverDropdown('homeOptions', 'mouseover');
    expect(app.showHoverDropdown).toEqual('homeOptions');
  });

  it('should not show dropdown when mouse move away', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    app.onHoverDropdown('homeOptions', 'mouseleave');
    expect(app.showHoverDropdown).toEqual('');
  });

  // it('should call onToggleDropdown() when click on element contians .dropdownToggler',() => {
  //   let fixture = TestBed.createComponent(HeaderComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   spyOn(app, 'onToggleDropdown');
  //   let button = fixture.debugElement.nativeElement.querySelector('.dropdownToggler');
  //   button.click();
  //   expect(app.onToggleDropdown).toHaveBeenCalled();
  // });

  it('should open toggled options', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    app.onToggleDropdown('homeOptions');
    expect(app.showToggleDropdown).toEqual('homeOptions');
  });

  it('should close toggled options if clicked twice or change the tap', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    app.showToggleDropdown = 'homeOptions';
    app.onToggleDropdown('homeOptions');
    expect(app.showToggleDropdown).not.toEqual('homeOptions');
  });

});
