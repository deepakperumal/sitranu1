import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../controller/header.component';
import {FooterComponent} from '../controller/footer.component';
@NgModule({
  exports :  [ HeaderComponent,
    FooterComponent ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
