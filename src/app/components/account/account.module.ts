import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { ProfileModule } from './sub-components/profile/profile.module';
import { NotificationModule } from './sub-components/notification/notification.module';
import { ButtonModule } from './sub-components/button/button.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    ProfileModule,
    NotificationModule,
    ButtonModule,
  ],
  exports: [AccountComponent],
})
export class AccountModule {}
