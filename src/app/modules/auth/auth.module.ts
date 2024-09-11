import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import { AuthLayoutComponent } from '../../layouts';
import { TextFieldComponent } from '../../shared/components';
import { FlatButtonComponent } from '../../shared/components';
import { FormsModule } from '@angular/forms';
import { LogoutContainer } from './containers';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],
	exports: [LogoutContainer],
	imports: [
		CommonModule,
		AuthRoutingModule,
		AuthLayoutComponent,
		TextFieldComponent,
		FlatButtonComponent,
		FormsModule,
		MatIconModule
	]
})
export class AuthModule {}
