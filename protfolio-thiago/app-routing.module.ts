import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'src/app/components/about/about.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'timeline', component: TimelineComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
