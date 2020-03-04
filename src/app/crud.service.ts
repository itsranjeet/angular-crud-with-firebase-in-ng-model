import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  getStudent() {
    throw new Error("Method not implemented.");
  }
 
  constructor(
    private firestore: AngularFirestore) { }
 formData: any;
  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }
 
  update_Student(recordID, record){
    return this.firestore.doc('Students/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
  get_all_Students() {
    return this.firestore.collection('Students').ref.get();
  }
  get_student(id: any) {
    return this.firestore.collection('Students').doc(id).ref.get();
  }
  create_NewDepartment(record) {
    return this.firestore.collection('Departments').add(record);
  }
 
  read_Department() {
    return this.firestore.collection('Departments').snapshotChanges();
  }
 
  update_Department(recordID,record){
    return this.firestore.doc('Departments/' + recordID).update(record);
  }
  get_Department() {
    return this.firestore.collection('Departments').snapshotChanges();
  }
  getDepartment(id: any) {
    return this.firestore.collection('Departments').doc(id).ref.get();
  }

}