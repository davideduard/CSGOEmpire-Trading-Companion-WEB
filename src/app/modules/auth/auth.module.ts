import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import { AuthLayoutComponent } from '../../layouts';
import { TextFieldComponent } from '../../shared/components';
import { FlatButtonComponent } from '../../shared/components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],
	imports: [
		CommonModule,
		AuthRoutingModule,
		AuthLayoutComponent,
		TextFieldComponent,
		FlatButtonComponent,
		FormsModule
	]
})
export class AuthModule {}
