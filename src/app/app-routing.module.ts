import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'form-example',
    loadChildren: () => import('./form-example/form-example.module').then(m => m.FormExampleModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
