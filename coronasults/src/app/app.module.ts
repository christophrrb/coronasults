import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './_template/navbar/navbar.component';
import { FooterComponent } from './_template/footer/footer.component';
import { ResultsComponent } from './_template/landing_page/results/results.component';
import { ResultsService } from './_service/results.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EnterResultsComponent } from './admin_pages/enter-results/enter-results.component';
import { AdminBarComponent } from './admin_pages/admin-bar/admin-bar.component';
import { SearchResultComponent } from './admin_pages/search-result/search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ResultsComponent,
    LoginPageComponent,
    EnterResultsComponent,
    AdminBarComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
