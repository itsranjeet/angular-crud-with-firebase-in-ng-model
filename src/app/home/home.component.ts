import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Crud } from "src/app/crud.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  title = 'Firestore CRUD Operations Students App';
  list: Crud[];
  payload: any;
  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;
 departments: any[];
 DepartmentId: any;
  constructor(private crudService: CrudService,private firestore:AngularFirestore) { }
 
  ngOnInit() {
    this.crudService.read_Students().subscribe(data => {
 
      this.students = data.map(e => {
        return {
          id: e.payload.doc.data()['id'],          
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.students);
 
    });
    this.crudService.get_Department().subscribe(data => {
          this.departments = data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              Name: e.payload.doc.data()['Name'],
            };
          })
          console.log(this.departments);
     
        });
      }

    
 
  CreateRecord() {
    let record = [];
    record['Name'] = this.studentName;
    record['Age'] = this.studentAge;
    record['Address'] = this.studentAddress;
    record['DepartmentId'] = this.DepartmentId;
    this.crudService.create_NewStudent(record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      this.DepartmentId = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
}

