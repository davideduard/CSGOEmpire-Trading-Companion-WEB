import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef
} from '@angular/material/dialog';
import { CardInputComponent } from '../card-input/card-input.component';
import { FlatButtonComponent } from '../flat-button/flat-button.component';

@Component({
	selector: 'app-pop-up-dialog',
	standalone: true,
	imports: [
		CommonModule,
		MatDialogModule,
		CardInputComponent,
		FlatButtonComponent
	],
	template: ` <h1 mat-dialog-title>Change your API key</h1>
		<mat-dialog-content class="mat-typography">
			<div class="dialog-data">
				<div class="text-container">
					<p class="opacity-30">
						This API key can be used to automate actions on CSGOEmpire<br />
						such as depositing and withdrawing skins, as well as accessing stats
						for referrals and other features.
					</p>
					<p class="opacity-30">
						Treat this API key like a password to your account, as anyone you
						give this to will have limited control of your account and access to
						these features.
					</p>
					<p class="text-errorRed-darker">
						Please note that using the API key will bypass 2FA.
					</p>
				</div>
				<div class="input-placeholder">
					<app-card-input
						placeholder="Enter your API Here"
						type="password"
					></app-card-input>

					<div class="buttons-placeholder">
						<app-flat-button
							label="Confirm"
							class="w-44"
							(click)="onCancel()"
						></app-flat-button>
						<app-flat-button
							label="Revoke API"
							id="revoke-button"
							class="w-44"
						></app-flat-button>
					</div>
				</div>
			</div>
		</mat-dialog-content>`,
	styleUrls: ['./pop-up-dialog.component.scss']
})
export class PopUpDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<PopUpDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public dialogData: any
	) {}

	onCancel(): void {
		this.dialogRef.close();
	}
}
