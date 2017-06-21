## PersianLettersService

This service provides helper for 'persian letters'.

### Methods

#### replaceArabicLettersWithPersianLetters(inputStr: string): string

This method take a 'string' and replace all arabic letters with persian(e.g 'ي' and 'ك' replace with 'ی' and 'ک').?

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