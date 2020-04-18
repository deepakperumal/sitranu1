import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClientViewModuleModule} from './controller/page-controller/client-view-module.module';
import {PageRoutingModule} from './controller/page-controller/page-routing-module' 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PageRoutingModule,
    ClientViewModuleModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
