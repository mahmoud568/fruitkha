import { Directive, ElementRef, HostListener, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
    if(verticalOffset != 0) this.renderer.addClass(this.elementRef.nativeElement, 'scrolled');
    else this.renderer.removeClass(this.elementRef.nativeElement, 'scrolled');
  }

}
