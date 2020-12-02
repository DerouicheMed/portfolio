import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceBoxComponent } from './components/services/service-box/service-box.component';
import { MainComponent } from './components/main/main.component';
import { ShootingStarComponent } from './components/main/shooting-star/shooting-star.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/about/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialsComponent } from './components/socials/socials.component';
import { AnnounecementComponent } from './components/announecement/announecement.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    ServiceBoxComponent,
    MainComponent,
    ShootingStarComponent,
    FooterComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    SocialsComponent,
    AnnounecementComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
