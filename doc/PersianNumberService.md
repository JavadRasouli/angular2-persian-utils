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

## License

[`MIT`](./LICENSE.md)