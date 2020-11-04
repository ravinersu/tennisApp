import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveScoringPageRoutingModule } from './live-scoring-routing.module';

import { LiveScoringPage } from './live-scoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveScoringPageRoutingModule
  ],
  declarations: [LiveScoringPage]
})
export class LiveScoringPageModule {}
