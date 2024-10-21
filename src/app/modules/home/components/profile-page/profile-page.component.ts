import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpDialogComponent } from '../../../../shared/components';

@Component({
	selector: 'app-profile-page',
	template: `
		<app-home-layout>
			<app-nav-bar [username]="username"></app-nav-bar>
			<div class="profile-page-container">
        <div class="profile-picture-row">
          <div class="profile-picture" (mouseenter)="isHovering = true" (mouseleave)="isHovering = false">
            <mat-icon *ngIf="isHovering" svgIcon="camera" class="scale-[1.3] hover:cursor-pointer"></mat-icon>

            <!--to remove this later-->
            <p *ngIf="!isHovering" class="text-white text-4xl font-primary">{{profileInitials}}</p>
            <!---->

          </div>
          <div class="name-and-email">
            <div class="username-placeholder">
              <p class="username">{{username}}</p>
              <mat-icon svgIcon="verified" class="scale-[1]"></mat-icon>
            </div>
            <div class="email-placeholder">
              <mat-icon svgIcon="edit" class="scale-[0.7] hover:cursor-pointer"></mat-icon>
              <p class="email">eduard.david0129@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="profile-fields-placeholder">
          <div class="token-row">
            <app-card title="Empire Token">
              <div class="card-content">
                <p class="warning">Sharing this token with anyone else could result in loss of items / money. Do not share this with untrusted people!</p>
                <div class="input">
                  <div class="inputs-placeholder">
                    <app-card-input class="w-full" [disabled]="true" placeholder="15e7****************************"></app-card-input>
                  </div>
                  <app-flat-button label="Change API" class="w-44" (click)="openDialog()"></app-flat-button>
                </div>
              </div>
            </app-card>
          </div>
          <div class="details-row">
            <app-card title="Personal Details">
              <div class="card-content">
                <div class="input">
                  <div class="inputs-placeholder">
                    <app-card-input class="w-full" inputTitle="First Name" placeholder="Eduard"></app-card-input>
                    <app-card-input class="w-full" inputTitle="Last Name" placeholder="David"></app-card-input>
                  </div>
                  <app-flat-button label="Confirm Changes" class="w-44 pt-9"></app-flat-button>
                </div>
              </div>
            </app-card>
          </div>
          <div class="password-row">
            <app-card title="Change Password">
              <div class="card-content">
                <div class="input">
                  <div class="inputs-placeholder">
                    <app-card-input class="w-full" inputTitle="New Password" type="password"></app-card-input>
                    <app-card-input class="w-full" inputTitle="Confirm Password" type="password"></app-card-input>
                  </div>
                  <app-flat-button label="Change Password" class="w-44 pt-9"></app-flat-button>
                </div>
              </div>
            </app-card>
          </div>
        </div>
			</div>
		</app-home-layout>
	`,
	styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
	isHovering: boolean = false;
	profileInitials: string = '';
	@Input() username: string = '';

	constructor(public dialog: MatDialog) {}

	private generateInitials(): void {
		this.profileInitials = this.username.charAt(0).toUpperCase();
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(PopUpDialogComponent, {});

		dialogRef.afterClosed().subscribe(result => {
			//this.animal = result;
		});
	}

	ngOnInit(): void {
		this.generateInitials();
	}
}
