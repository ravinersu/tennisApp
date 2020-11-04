import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoringProfilePage } from './scoring-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ScoringProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoringProfilePageRoutingModule {}
