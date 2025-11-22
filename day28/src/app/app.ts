import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appHighlightOnClick } from './directives/highlight-on-click';
import { Hoverbox } from './components/hoverbox/hoverbox';
import { StudentInfo } from './components/student-info/student-info';
import { Quote } from './components/quote/quote';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, appHighlightOnClick, Hoverbox, StudentInfo, Quote],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
