import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import Component
import { PopularComponent } from './popular/popular.component';
import { HomeComponent } from './home/home.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrailerComponent } from './trailer/trailer.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'popular', component : PopularComponent},
  {path : 'toprated', component : TopRatedComponent},
  {path : 'upcoming', component : UpcomingComponent},
  {path : 'trailer/:id', component : TrailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
