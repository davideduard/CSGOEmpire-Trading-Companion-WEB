import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer, RegisterContainer } from './containers';

const routes: Routes = [
	{
		path: 'login',
		component: LoginContainer,
		pathMatch: 'full'
	},
	{
		path: 'register',
		component: RegisterContainer,
		pathMatch: 'full'
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
