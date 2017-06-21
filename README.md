# Angular2PersianUtils

Persian utils for Angular2 apps. 

[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url] 
[![Package Quality][packageQuality-image]][packageQuality-url]
[![dependencies Quality][dependencies-quality]][dependencies-quality-url]
[![dev dependencies Quality][dev-dependencies-quality]][dev-dependencies-quality-url]
[![Codacy Badge][codacy-quality]][codacy-quality-url]
[![Codacy Badge][codacy-coverage]][codacy-coverage-url]

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