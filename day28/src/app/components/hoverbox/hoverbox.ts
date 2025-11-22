import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-hoverbox',
  imports: [],
  templateUrl: './hoverbox.html',
  styleUrl: './hoverbox.css',
})
export class Hoverbox {
  isHoverd: boolean = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.isHoverd = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHoverd = false;
  }
}
