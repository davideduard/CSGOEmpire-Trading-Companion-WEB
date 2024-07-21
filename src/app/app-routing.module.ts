import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, notAuthGuard } from './guards';
import { PageNotFoundComponent } from './shared/components';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () =>
			import('./modules/auth/auth.module').then(module => module.AuthModule),
		canActivate: [notAuthGuard]
	},
	{
		path: '',
		loadChildren: () =>
			import('./modules/home/home.module').then(module => module.HomeModule),
		canActivate: [authGuard]
	},
	{
		path: '404',
		component: PageNotFoundComponent
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
