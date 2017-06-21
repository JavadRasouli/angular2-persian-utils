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

## Available services

* [`NationalCodeService`](./doc/PersianUtilsModule.md)
* [`CompanyNationalIdService`](./doc/CompanyNationalIdService.md)
* [`PersianNumberService`](./doc/PersianNumberService.md)
* [`PersianLettersService`](./doc/PersianLettersService.md)

## License

[`MIT`](./LICENSE.md)