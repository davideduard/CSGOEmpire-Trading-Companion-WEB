import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { AuthLayoutComponent } from '../../layouts';

@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],
	imports: [CommonModule, AuthRoutingModule, AuthLayoutComponent]
})
export class AuthModule {}
