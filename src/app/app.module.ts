import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IconRegistryService } from './services';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [
		IconRegistryService,
		{
			provide: APP_INITIALIZER,
			useFactory: (iconRegistryService: IconRegistryService) => () =>
				iconRegistryService.registerCustomIcons(),
			deps: [IconRegistryService],
			multi: true
		}
	],
	exports: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
