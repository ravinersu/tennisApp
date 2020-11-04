import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


import { IonicModule } from '@ionic/angular';

import { ScoringProfilePageRoutingModule } from './scoring-profile-routing.module';

import { ScoringProfilePage } from './scoring-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatSelectModule,
    ScoringProfilePageRoutingModule
  ],
  declarations: [ScoringProfilePage]
})
export class ScoringProfilePageModule {}
