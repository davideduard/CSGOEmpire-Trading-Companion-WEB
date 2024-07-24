import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
	ImportDataContainer,
	StatsPageContainer,
	TradeHistoryContainer
} from './containers';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'stats',
		pathMatch: 'full'
	},
	{
		path: 'stats',
		component: StatsPageContainer
	},
	{
		path: 'import',
		component: ImportDataContainer
	},
	{
		path: 'history',
		component: TradeHistoryContainer
	},
	{
		path: '**',
		redirectTo: 'stats',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}
