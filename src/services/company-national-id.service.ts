import { Injectable } from '@angular/core';

@Injectable()
export class CompanyNationalIdService {

  constructor() { }

  isValid(companyNationalId: string): boolean {
    return this.vlaidate(companyNationalId);
  }

  private vlaidate(companyNationalId: string): boolean {
    if (companyNationalId == undefined)
      return false;

    if (companyNationalId.length !== 11)
      return false;

    switch (companyNationalId) {
      case '00000000000':
      case '11111111111':
      case '22222222222':
      case '33333333333':
      case '44444444444':
      case '55555555555':
      case '66666666666':
      case '77777777777':
      case '88888888888':
      case '99999999999':
        return false;
    }

    var addition = parseInt(companyNationalId.charAt(9)) + 2;

    var num1 = (parseInt(companyNationalId.charAt(0)) + addition) * 29;
    var num2 = (parseInt(companyNationalId.charAt(1)) + addition) * 27;
    var num3 = (parseInt(companyNationalId.charAt(2)) + addition) * 23;
    var num4 = (parseInt(companyNationalId.charAt(3)) + addition) * 19;
    var num5 = (parseInt(companyNationalId.charAt(4)) + addition) * 17;
    var num6 = (parseInt(companyNationalId.charAt(5)) + addition) * 29;
    var num7 = (parseInt(companyNationalId.charAt(6)) + addition) * 27;
    var num8 = (parseInt(companyNationalId.charAt(7)) + addition) * 23;
    var num9 = (parseInt(companyNationalId.charAt(8)) + addition) * 19;
    var num10 = (parseInt(companyNationalId.charAt(9)) + addition) * 17;
    var controlNum = parseInt(companyNationalId.charAt(10));

    var sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
    var remain = sum % 11;
    remain = (remain === 10) ? 0 : remain;
    return controlNum === remain;
  }
}
