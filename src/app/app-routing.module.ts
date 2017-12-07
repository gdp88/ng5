import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //Add this
import { AboutComponent } from './about/about.component'; //Add this

const routes: Routes = [
	{
		pathMatch: 'full',
		path: '',
		component: HomeComponent
	},
	{
		pathMatch: 'full',
		path: 'about/:id',
		component: AboutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
