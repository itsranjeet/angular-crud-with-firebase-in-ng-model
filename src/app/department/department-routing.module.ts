import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { UpdateComponent } from "./update/update.component";
const routes: Routes = [
  { path: 'add',
  component: AddComponent
},
{ path: '',
  component: UpdateComponent
},
{ path: 'update/:id',
  component: EditComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
