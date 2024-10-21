import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { AuthModule } from '../auth/auth.module';
import { MatIconModule } from '@angular/material/icon';
import {
	CardComponent,
	CardInputComponent,
	FlatButtonComponent,
	TextFieldComponent
} from '../../shared/components';

import { HomeLayoutComponent } from '../../layouts';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],

	imports: [
		CommonModule,
		HomeRoutingModule,
		AuthModule,
		MatIconModule,
		CardComponent,
		HomeLayoutComponent,
		TextFieldComponent,
		CardInputComponent,
		FlatButtonComponent,
		MatDialogModule
	]
})
export class HomeModule {}
