import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'employee',loadChildren:()=> import('./mfe-feature/mfe-feature.module')
  .then(m => {
    console.log('loo', m);
    return m.MfeFeatureModule
  })
  .catch( err => {
    console.log('erroo', err);
    return err })},
    {path:'',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
