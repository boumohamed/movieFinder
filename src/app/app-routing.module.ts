import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component'
import { SearchComponent } from './components/search/search.component';





const routes: Routes = [
  {path : 'moviedetails/:id', component: MovieDetailsComponent},
  {path : '**', component: SearchComponent},
  {path : '', component: SearchComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
