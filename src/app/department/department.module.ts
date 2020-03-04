import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DepartmentRoutingModule } from './department-routing.module';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [AddComponent, UpdateComponent, EditComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule
  ]
})
export class DepartmentModule { }
