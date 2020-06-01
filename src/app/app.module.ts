import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
