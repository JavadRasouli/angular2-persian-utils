import { PersianNumberService } from './services/persian-number.service';
import { NgModule } from '@angular/core';

import { NationalCodeService } from './services/national-code.service';
import { CompanyNationalIdService } from './services/company-national-id.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [NationalCodeService, CompanyNationalIdService, PersianNumberService],
})
export class PersianUtilsModule { }
