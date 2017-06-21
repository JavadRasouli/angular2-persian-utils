import { Injectable } from '@angular/core';
import { NumberToPersianWord } from './../number-to-persian-word';

@Injectable()
export class PersianNumberService {

  constructor() { }

  toPersianNumber(number: number | string): string {
    var num = number as string;
    return (this.arabicNumberTopersian(this.engNumberTopersian(num)));
  }

  isPersianNumber(number: number | string): boolean {
    var num = number as string;

    var regexp = new RegExp('^[\u06F0-\u06F9]+$');
    return regexp.test(num);
  }

  toEngNumber(number: string): number {
    var num = number as string;
    var engNumber = this.persianNumberToEng(num);

    if (isNaN(engNumber))
      throw `${number} is not valid persian Number`;
    return engNumber;
  }

  toPersianWord(number: number | string): string {
    return (new NumberToPersianWord).convertNumberToString(this.toEngNumber(number as string));
  }

  private engNumberTopersian(number: string): string {
    if (number == undefined) return '';
    var str = number.toString().trim();
    if (str === "") return "";
    str = str.replace(/0/g, '۰');
    str = str.replace(/1/g, '۱');
    str = str.replace(/2/g, '۲');
    str = str.replace(/3/g, '۳');
    str = str.replace(/4/g, '۴');
    str = str.replace(/5/g, '۵');
    str = str.replace(/6/g, '۶');
    str = str.replace(/7/g, '۷');
    str = str.replace(/8/g, '۸');
    str = str.replace(/9/g, '۹');
    return str;
  }

  private arabicNumberTopersian(number: string): string {
    if (number == undefined) return '';
    var str = number.toString().trim();
    if (str === "") return "";
    str = str.replace(/٤/g, '۴');
    str = str.replace(/٥/g, '۵');
    str = str.replace(/٦/g, '۶');
    return str;
  }

  private persianNumberToEng(number: string): number {
    if (number == undefined) return NaN;
    var str = number.toString().trim();
    var str = number.toString().trim();
    if (str === "") return NaN;
    str = str.replace(/۰/g, '0');
    str = str.replace(/۱/g, '1');
    str = str.replace(/۲/g, '2');
    str = str.replace(/۳/g, '3');
    str = str.replace(/۴/g, '4');
    str = str.replace(/۵/g, '5');
    str = str.replace(/۶/g, '6');
    str = str.replace(/۷/g, '7');
    str = str.replace(/۸/g, '8');
    str = str.replace(/۹/g, '9');
    return Number(str);
  }
}
