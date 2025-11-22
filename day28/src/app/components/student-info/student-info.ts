import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-info',
  imports: [CommonModule],
  templateUrl: './student-info.html',
  styleUrl: './student-info.css',
})
export class StudentInfo {
  studentName: string = 'Hassan Ali';
  dateOfBirth: Date = new Date(2002, 0, 10);
  score: number = 0.875;
  price: number = 3500;
}
