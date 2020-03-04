import { Component, OnInit } from '@angular/core';
import { CrudService } from "src/app/crud.service";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  DepartmentName: any;
  constructor(private Service: CrudService, private route: ActivatedRoute,private router: Router) {
    
      this.id = this.route.snapshot.params.id;

   }
  ngOnInit() {
    console.log(this.id);
    this.Service.getDepartment(this.id).then(departments => {
      const result = departments.data();
      this.DepartmentName = result.Name;
      console.log(result);
    });
    
  }
  
    EditRecord() {

      let record = {};

      record['Name'] =  this.DepartmentName;
      this.Service.update_Department(this.id, record).then(res => {
        alert('Data Updated Successfuly.')
        this.router.navigate(['/department']);
      })
        .catch(error => {
          console.log(error);
        });
    }
  
   
}
