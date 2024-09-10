import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import { NavBarComponent } from '../../shared/components';
import { HomeLayoutComponent } from '../../layouts';
@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],
	imports: [
		CommonModule,
		HomeRoutingModule,
		NavBarComponent,
		HomeLayoutComponent
	]
})
export class HomeModule {}
