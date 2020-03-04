import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { HomeComponent } from "./home/home.component";
import { EditComponent } from "./edit/edit.component";
const routes: Routes = [
  { path: '',
    component: IndexComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  { path: 'edit/:id',
    component: EditComponent
  },
  {
    path:'department',
    loadChildren:'./department/department.module#DepartmentModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
