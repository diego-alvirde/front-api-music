import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NuevoComponent } from './nuevo/nuevo.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
