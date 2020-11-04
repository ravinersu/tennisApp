import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { AddNewPlayerPageRoutingModule } from './add-new-player-routing.module';

import { AddNewPlayerPage } from './add-new-player.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,  
    IonicModule,   
    AddNewPlayerPageRoutingModule
  ],
  declarations: [AddNewPlayerPage]
})
export class AddNewPlayerPageModule {}
