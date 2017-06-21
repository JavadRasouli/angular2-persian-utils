import { Injectable } from '@angular/core';

@Injectable()
export class PersianLettersService {

  constructor() { }

  replaceArabicLettersWithPersianLetters(inputStr: string): string {
    if (inputStr == undefined) return "";
    var copyStr = inputStr;

    inputStr = inputStr.replace(/ي/g, 'ی');
    inputStr = inputStr.replace(/ك/g, 'ک');
    
    return inputStr;
  }
}
