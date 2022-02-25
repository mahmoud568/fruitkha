import { ElementRef, Renderer2 } from '@angular/core';
import { ScrollDirective } from './scroll.directive';

describe('ScrollDirective', () => {
  let ElementRef: ElementRef;
  let Renderer2: Renderer2;
  it('should create an instance', () => {
    const directive = new ScrollDirective(ElementRef, Renderer2);
    expect(directive).toBeTruthy();
  });
});
