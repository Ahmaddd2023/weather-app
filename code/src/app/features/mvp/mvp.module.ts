import { NgModule } from '@angular/core';
import { MvpRoutingModule } from './mvp-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Mvp1Component } from './pages/mvp-1/mvp-1.component';
import { NgxsModule } from '@ngxs/store';
import { MvpState } from './store';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Mvp1Component,
  ],
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MvpRoutingModule,
    NgxsModule.forFeature([MvpState]),
  ],
  exports: [MvpRoutingModule],
})
export class MvpModule {}
