import { Injectable } from '@angular/core';

@Injectable()
export class NationalCodeService {

  constructor() { }

  isValid(nationalCode: string): boolean {
    return this.vlaidate(nationalCode);
  }

  private vlaidate(nationalCode: string): boolean {
    if (nationalCode == undefined)
      return false;

    if (nationalCode.length !== 10)
      return false;

    var c = parseInt(nationalCode.charAt(9));
    var n = parseInt(nationalCode.charAt(0)) * 10 + parseInt(nationalCode.charAt(1)) * 9 + parseInt(nationalCode.charAt(2)) * 8 + parseInt(nationalCode.charAt(3)) * 7 + parseInt(nationalCode.charAt(4)) * 6 + parseInt(nationalCode.charAt(5)) * 5 + parseInt(nationalCode.charAt(6)) * 4 + parseInt(nationalCode.charAt(7)) * 3 + parseInt(nationalCode.charAt(8)) * 2;
    var r = n - Math.round(n / 11) * 11;

    if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r))
      return true;
    return false;
  }
}
