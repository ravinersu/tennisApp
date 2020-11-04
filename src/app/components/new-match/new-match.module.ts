import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { IonicModule } from '@ionic/angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';


import { NewMatchPageRoutingModule } from './new-match-routing.module';

import { NewMatchPage } from './new-match.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatSelectModule, 
    MatFormFieldModule,
    MatRadioModule,
    NewMatchPageRoutingModule
  ],
  declarations: [NewMatchPage]
})
export class NewMatchPageModule {}
