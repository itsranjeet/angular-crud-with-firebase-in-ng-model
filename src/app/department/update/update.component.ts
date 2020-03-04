import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CrudService } from 'src/app/crud.service';
import { Crud } from 'src/app/crud.model';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  list: Crud[];  
  departments: any;
  
  constructor(private service: CrudService,
    private firestore: AngularFirestore) { }
    ngOnInit() {
      this.service.get_Department().subscribe(data => {
        this.departments = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            Name: e.payload.doc.data()['Name'],
          };
        })
        console.log(this.departments);
   
      })
  }
  onEdit(item: Crud) {
    this.service.formData = Object.assign({}, item);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('Departments/' + id).delete();
    }
  }
}