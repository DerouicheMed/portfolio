import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  MainComponent,
  ServicesComponent,
  AboutComponent,
  ContactComponent,
  SocialsComponent,
  LoaderComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'socials',
    component: SocialsComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
