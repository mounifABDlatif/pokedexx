import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'detail/:id',
    component:DetailComponent,
  },
  {
    path:'edit/:id',
    component:EditComponent,
  },
  {
    path:'ajouter',
    component:AjouterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
