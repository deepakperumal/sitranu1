import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component'
import {AboutDetailComponent} from './sub-controller/about-detail.component'
import { EventComponent } from './event.component'
import { HistoryComponent } from './history.component'
import { ContactComponent } from './donate.component'
import { ChildrenComponent } from './children.component'
import {EventDetailComponent} from './sub-controller/event-detail.component'
import {BlogComponent} from './sub-controller/blog.component'
import { ContactUsComponent } from './contact.component'


export const routes: Routes = [
        {path:'',component: HomeComponent},
        {path:'about',component: AboutComponent},
        {path:'about-detail',component: AboutDetailComponent},
        {path:'history',component: HistoryComponent},
        {path:'donate',component: ContactComponent},
        {path:'event',component: EventComponent},
        {path:'children',component: ChildrenComponent},
        {path:'blog',component: BlogComponent},
        {path:'event-detail',component: EventDetailComponent},
        {path:'contact',component: ContactUsComponent}
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
