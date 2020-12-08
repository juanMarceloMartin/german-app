import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
