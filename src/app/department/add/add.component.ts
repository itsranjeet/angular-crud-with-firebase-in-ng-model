import { Component, OnInit } from '@angular/core';
import { CrudService } from "src/app/crud.service";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  departments: any;
  DepartmentName: any;
  constructor(private termsService: CrudService) { }

  ngOnInit() {
    this.termsService.read_Department().subscribe(data => {
 
      this.departments = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name']
        };
      })
      console.log(this.departments);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['Name'] = this.DepartmentName;
    this.termsService.create_NewDepartment(record).then(resp => {

      this.DepartmentName = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  
}