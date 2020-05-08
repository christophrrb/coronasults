import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_template/navbar/navbar.component';
import { ResultsComponent } from './landing_page/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
