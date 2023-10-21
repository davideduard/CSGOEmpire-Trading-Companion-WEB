import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import { AuthLayoutComponent } from '../../layouts';
import { TextFieldComponent } from '../../shared/components/text-field/text-field.component';

@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],
	imports: [
		CommonModule,
		AuthRoutingModule,
		AuthLayoutComponent,
		TextFieldComponent
	]
})
export class AuthModule {}
