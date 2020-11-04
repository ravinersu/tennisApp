import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-screen',
    pathMatch: 'full'
  },

  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home-screen',
    loadChildren: () => import('./components/home-screen/home-screen.module').then( m => m.HomeScreenPageModule)
  },
  
  {
    path: 'new-match',
    loadChildren: () => import('./components/new-match/new-match.module').then( m => m.NewMatchPageModule)
  },
  {
    path: 'add-new-player',
    loadChildren: () => import('./components/add-new-player/add-new-player.module').then( m => m.AddNewPlayerPageModule)
  },
  
  {
    path: 'matches',
    loadChildren: () => import('./components/matches/matches.module').then( m => m.MatchesPageModule)
  },
  {
    path: 'scoring-profile',
    loadChildren: () => import('./components/scoring-profile/scoring-profile.module').then( m => m.ScoringProfilePageModule)
  },
  {
    path: 'live-scoring',
    loadChildren: () => import('./components/live-scoring/live-scoring.module').then( m => m.LiveScoringPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
