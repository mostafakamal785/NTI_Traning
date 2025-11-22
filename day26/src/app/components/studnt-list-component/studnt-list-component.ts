import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { StudntCardComponent } from '../studnt-card-component/studnt-card-component';

@Component({
  selector: 'app-studnt-list-component',
  imports: [StudntCardComponent],
  templateUrl: './studnt-list-component.html',
  styleUrl: './studnt-list-component.css',
})
export class StudntListComponent implements AfterViewInit {
  @ViewChild('studentCard') firstStudentCard!: StudntCardComponent;
  @ViewChildren('studentCard') studentsCard!: QueryList<StudntCardComponent>;

  colors = ['#ffebee', '#e8f5e8', '#e3f2fd', '#fff3e0', '#f3e5f5'];

  students = [
    { id: 1, name: 'ahmed', age: 21 },
    { id: 2, name: 'mostafa', age: 22 },
    { id: 3, name: 'ali', age: 22 },
  ];

  ngAfterViewInit() {
    console.log('First Student:', this.firstStudentCard);
    console.log('All Students:', this.studentsCard?.length);
  }

  changeFirstStudentColor() {
    if (this.firstStudentCard) {
      const randomColor = this.getRandomColor();
      this.firstStudentCard.backgroundColor = randomColor;
      console.log('Changed first student color to:', randomColor);
    }
  }

  changeAllStudentColor() {
    if (this.studentsCard) {
      this.studentsCard.forEach((student, index) => {
        const randomColor = this.getRandomColor();
        student.backgroundColor = randomColor;
        console.log(`Changed student ${index + 1} color to:`, randomColor);
      });
    }
  }

  private getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
