import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  studentName: any;
  studentAge: any;
  studentAddress: any;
  id: any;
  DepartmentId: any;
  Department: { id: string; isEdit: boolean; Name: any;}[];
  
  constructor(private Service: CrudService, private route: ActivatedRoute,private router: Router) {
    
      this.id = this.route.snapshot.params.id;

   }
  ngOnInit() {
    console.log(this.id);
    this.Service.get_student(this.id).then(students => {
      const result = students.data();
      this.studentName = result.Name;
      this.studentAge = result.Age;
      this.studentAddress = result.Address;

      {
        this.Service.get_Department().subscribe(data => {
          this.Department= data.map(e => {
            return{
              id: e.payload.doc.id,
              isEdit: false,
              Name: e.payload.doc.data()['Name'],
    };
  })
  console.log(this.Department);
    })
  }


      console.log(result);
    
    })
  
  }
  
    EditRecord() {

      let record = {};

      record['Name'] =  this.studentName;
      record['Age'] = this.studentAge;
      record['Address'] = this.studentAddress;
      record['DepartmentId'] = this.DepartmentId;
      this.Service.update_Student(this.id, record).then(res => {
        alert('Data Updated Successfuly.')
        this.router.navigate(['']);
      })
        .catch(error => {
          console.log(error);
        });
}
}

  
