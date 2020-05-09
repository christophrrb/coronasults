import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './_template/landing_page/results/results.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EnterResultsComponent } from './admin_pages/enter-results/enter-results.component';
import { SearchResultComponent } from './admin_pages/search-result/search-result.component';


const routes: Routes = [
  {path: '', redirectTo: "/index", pathMatch: "full"},
  {path: 'index', component: ResultsComponent},
  {path: 'login', component: LoginPageComponent},
  // Admin Routes
  {path: 'admin/enter-result', component: EnterResultsComponent},
  {path: 'admin/search-result', component: SearchResultComponent},
  //Wildcard
  {path: '**', redirectTo: "/index", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
