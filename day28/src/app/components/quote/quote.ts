import { Component } from '@angular/core';
import { WordCountPipe } from '../../pipes/word-count-pipe';


@Component({
  selector: 'app-quote',
  imports: [WordCountPipe],
  templateUrl: './quote.html',
  styleUrl: './quote.css',
})
export class Quote {
  text = 'Success comes from small steps';
}
