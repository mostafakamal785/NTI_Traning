import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card-box-component',
  imports: [],
  templateUrl: './card-box-component.html',
  styleUrl: './card-box-component.css',
})
export class CardBoxComponent {
  @ContentChild('paragraphe') paragraphe!: ElementRef;

  ngAfterContentInit() {
    console.log(this.paragraphe.nativeElement.textContent)
  }
}
