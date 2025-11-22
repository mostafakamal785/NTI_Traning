import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnClick]',
})
export class appHighlightOnClick {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('click') onClick() {
    this.changeTextColor('blue');
  }

  @HostListener('dblclick') onDoubleClick() {
    this.changeTextColor('red');
  }

  private changeTextColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
