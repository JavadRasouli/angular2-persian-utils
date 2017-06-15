## CompanyNationalIdService

This service provides helper for 'company national code'.

company national code >> شماره ثبت شرکت 

### Methods

#### isValid(companyNationalId: string): boolean

This method take a 'companyNationalCode' and check it is correctly?

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

## License

[`MIT`](./LICENSE.md)