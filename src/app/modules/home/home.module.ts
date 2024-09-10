import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { AuthModule } from '../auth/auth.module';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../../shared/components';

@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],

	imports: [
		CommonModule,
		HomeRoutingModule,
		AuthModule,
		MatIconModule,
		CardComponent
	]
})
export class HomeModule {}
