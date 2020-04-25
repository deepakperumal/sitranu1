import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';
import { EventComponent } from './event.component'
import { HistoryComponent } from './history.component'
import {  ChildrenComponent} from './children.component'
import { ContactComponent } from './donate.component'
import { ContactUsComponent } from './contact.component'

import {AboutDetailComponent} from './sub-controller/about-detail.component'
import {EventDetailComponent} from './sub-controller/event-detail.component'
import {BlogComponent} from './sub-controller/blog.component'
import { SharedModuleModule } from '../../shared/module/shared-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    EventComponent,
    HistoryComponent,
    ContactComponent,
    ChildrenComponent,
    AboutDetailComponent,
    EventDetailComponent,
    BlogComponent,
    ContactUsComponent

  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    NgbModule,
    FormsModule
    
  ]
})
export class ClientViewModuleModule { }
