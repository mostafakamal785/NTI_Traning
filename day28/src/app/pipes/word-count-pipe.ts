import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount'
})
export class WordCountPipe implements PipeTransform {

  transform(value: string): number {

    const words = value.trim().split(' ');

       return words.filter((word) => word.length > 0).length;
  }

}
