import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mvp1Component } from './pages/mvp-1/mvp-1.component';

const routes: Routes = [
   { path: '', component: Mvp1Component },
   { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MvpRoutingModule {}
