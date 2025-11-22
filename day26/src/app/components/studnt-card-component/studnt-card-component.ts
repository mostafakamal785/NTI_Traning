import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studnt-card-component',
  imports: [],
  templateUrl: './studnt-card-component.html',
  styleUrl: './studnt-card-component.css',
})
export class StudntCardComponent {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() backgroundColor: string = 'white'; 
}
