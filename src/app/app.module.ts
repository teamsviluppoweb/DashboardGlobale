import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componenets/home/home.component';
import {MaterialModule} from './shared/modules/material.module';
import {FooterComponent} from './componenets/footer/footer.component';
import { TipologiaConcorsoComponent } from './componenets/tipologia-concorso/tipologia-concorso.component';
import { MenuSidenavComponent } from './componenets/menu-sidenav/menu-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TipologiaConcorsoComponent,
    MenuSidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
