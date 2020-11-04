import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewPlayerPage } from './add-new-player.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewPlayerPageRoutingModule {}
