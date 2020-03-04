import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { Crud } from "../crud.model";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  list =  [];
  CrudService: any;
  students: any;
  DepartmentId: any;
  DepartmentName: any;

  // department: { id: string; isEdit: boolean; Name: any; }[];

  constructor(private service: CrudService,
    private firestore: AngularFirestore){} 
  
   
      ngOnInit() {
        this.service.get_all_Students().then(data => {
          data.docs.forEach(doc=>{
            this.DepartmentId = doc.data().DepartmentId;
            console.log(doc.data().DepartmentId);
            this.service.getDepartment(doc.data().DepartmentId).then(department_data=>{
             
              this.DepartmentName = department_data.data().Name;
              this.list.push({
                id : doc.id,
                Name : doc.data().Name,
                Age :doc.data().Age,
                Address : doc.data().Address,
                DepartmentName: this.DepartmentName
              });
            });
          });
          // console.log(this.list);          
        });

      }
  id(id: any) {
    throw new Error("Method not implemented.");
  }
  departments(departments: any) {
    throw new Error("Method not implemented.");
  }
      onEdit(item: Crud) {
        this.service.formData = Object.assign({}, item);
      }
     
      onDelete(id: string) {
        if (confirm("Are you sure to delete this record?")) {
          this.firestore.doc('Students/' + id).delete();
        }
          
    }
    
  
    }
   