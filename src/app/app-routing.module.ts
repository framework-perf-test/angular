import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectComponent } from './direct/direct.component';

const routes: Routes = [
  { path: '', component: DirectComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
