import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './_template/landing_page/results/results.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EnterResultsComponent } from './admin_pages/enter-results/enter-results.component';
import { SearchResultComponent } from './admin_pages/search-result/search-result.component';
import { DataVisualizationComponent } from './visualization/data-visualization/data-visualization.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CreateUserComponent } from './admin_pages/create-user/create-user.component';


const routes: Routes = [
  {path: '', redirectTo: "/index", pathMatch: "full"},
  {path: 'index', component: ResultsComponent},
  {path: 'data-visualization', component: DataVisualizationComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'login', component: LoginPageComponent},
  // Admin Routes
  {path: 'admin/enter-result', component: EnterResultsComponent},
  {path: 'admin/search-result', component: SearchResultComponent},
  {path: 'admin/create-user', component: CreateUserComponent},
  //Wildcard
  {path: '**', redirectTo: "/index", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
