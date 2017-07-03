# Angular2PersianUtils

Persian utils for Angular2 apps. 

## Install

### npm

```
npm install angular2-persian-utils --save
```

## Usage

Import `PersianUtilsModule` into your app's modules:

``` typescript
import {PersianUtilsModule} from 'angular2-persian-utils'

@NgModule({
  imports: [
    PersianUtilsModule
  ]
})
```

This makes all the `angular2-persian-utils` services available for use in your app.

## NationalCodeService

This service provides helper for 'Iranian people national code'.

national code >> کد ملی 

### Methods

#### isValid(nationalCode: string): boolean

This method take a 'nationalCode' and check it is correctly?

##### Example

```typescript
import { Component } from '@angular/core';

import {NationalCodeService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private nationalCodeService: NationalCodeService) {
        var nationalCodeIsValid = nationalCodeService.isValid('1234567890'));
    }
}
```

## CompanyNationalIdService

This service provides helper for 'company national id'.

company national id >> شماره ثبت شرکت 

### Methods

#### isValid(companyNationalId: string): boolean

This method take a 'companyNationalId' and check it is correctly?

##### Example

```typescript
import { Component } from '@angular/core';

import {CompanyNationalIdService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private companyNationalIdService: CompanyNationalIdService) {
        var companyNationalIdIsValid = companyNationalIdService.isValid('12345678901'));
    }
}
```

## PersianNumberService

This service provides helper for 'persian numbers'.

### Methods

#### toPersianNumber(number: number | string): string

This method take a "number" and convert to persian digits.
##### Example

```typescript
import { Component } from '@angular/core';

import {PersianNumberService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private persianNumberService: PersianNumberService) {
        console.log(this.persianNumberService.toPersianNumber(1234567890));     //۱۲۳۴۵۶۷۸۹۰
        console.log(this.persianNumberService.toPersianNumber('1234567890'));   //۱۲۳۴۵۶۷۸۹۰
        console.log(this.persianNumberService.toPersianNumber('۱۲۳۴۵۶۷۸۹۰'));   //۱۲۳۴۵۶۷۸۹۰
        console.log(this.persianNumberService.toPersianNumber('1۱2۲3۳4۴5۵6۶7۷8۸9۹0۰')); //۱۱۲۲۳۳۴۴۵۵۶۶۷۷۸۸۹۹۰۰

        // Arabic number
        console.log(this.persianNumberService.toPersianNumber('۱۲۳٤٥٦۷۸۹۰'));   ////۱۲۳۴۵۶۷۸۹۰
    }
}
```

#### isPersianNumber(number: number | string): boolean

This method take a "number" and check it is persianDigits?

##### Example

```typescript
import { Component } from '@angular/core';

import {PersianNumberService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private persianNumberService: PersianNumberService) {
        console.log(this.persianNumberService.isPersianNumber(1234567890));     // false
        console.log(this.persianNumberService.isPersianNumber('1234567890'));   // false
        console.log(this.persianNumberService.isPersianNumber('1۱2۲3۳4۴5۵6۶7۷8۸9۹0۰')); // flase
        // Arabic number
        console.log(this.persianNumberService.isPersianNumber('۱۲۳٤٥٦۷۸۹۰'));   // flase
        console.log(this.persianNumberService.isPersianNumber('۱۲۳۴۵۶۷۸۹۰'));   // true
    }
}
```

#### toEngNumber(number: string): number

This method take a "number" and convert to english number?

##### Example

```typescript
import { Component } from '@angular/core';

import {PersianNumberService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private persianNumberService: PersianNumberService) {
        console.log(this.persianNumberService.toEngNumber('1234567890'));   // 1234567890 
        console.log(this.persianNumberService.toEngNumber('۱۲۳۴۵۶۷۸۹۰'));   // 1234567890
        console.log(this.persianNumberService.toEngNumber('۱۲۳٤٥٦۷۸۹۰'));   // throw ۱۲۳٤٥٦۷۸۹۰ is not valid persian Number
    }
}
```

#### toPersianWord(number: number | string): string

This method take a "number" and convert to persian word.

##### Example

```typescript
import { Component } from '@angular/core';

import {PersianNumberService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private persianNumberService: PersianNumberService) {
        console.log(this.persianNumberService.toPersianWord('1234567890'));   // یک میلیارد و دویست و سی و چهار میلیون و پانصد و شصت و هفت هزار و هشتصد و نود
        console.log(this.persianNumberService.toPersianWord('۱۲۳۴۵۶۷۸۹۰'));   // یک میلیارد و دویست و سی و چهار میلیون و پانصد و شصت و هفت هزار و هشتصد و نود 
        console.log(this.persianNumberService.toPersianWord(1234567890));     // یک میلیارد و دویست و سی و چهار میلیون و پانصد و شصت و هفت هزار و هشتصد و نود
        console.log(this.persianNumberService.toPersianWord('۱۲۳٤٥٦۷۸۹۰'));   // error: ۱۲۳٤٥٦۷۸۹۰ is not valid persian Number
  }
}
```

## PersianLettersService

This service provides helper for 'persian letters'.

### Methods

#### replaceArabicLettersWithPersianLetters(inputStr: string): string

This method take a 'string' and replace all arabic letters with persian(e.g 'ي' and 'ك' replace with 'ی' and 'ک').

##### Example

```typescript
import { Component } from '@angular/core';

import {PersianNumberService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private persianNumberService: PersianNumberService) {
        console.log(this.persianLettersService
          .replaceArabicLettersWithPersianLetters(
            'انگولار يك فريمورك ساختاري براي وب اپليكيشن هاي پويا است.')
          );// انگولار یک فریمورک ساختاری برای وب اپلیکیشن های پویا است.
    }
}
```

## License

[`MIT`](./LICENSE.md)
