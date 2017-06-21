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

## License

[`MIT`](./LICENSE.md)