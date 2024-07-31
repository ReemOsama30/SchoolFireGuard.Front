import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherService } from '../../Services/TeacherService/teacher.service';

@Component({
  selector: 'app-insert-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insert-data.component.html',
  styleUrl: './insert-data.component.css'
})


export class InsertDataComponent {

  constructor(private teacherService:TeacherService)
  {

  }
  teacherForm=new FormGroup({
    teacherName: new FormControl(''),
    class: new FormControl(''),
    presentStudents:new FormControl(''),
    absentStudents:new FormControl()

  });



  onSubmit() {
    console.log("the form result is ",this.teacherForm)
   this.teacherService.insertData(this.teacherForm).subscribe({
next(value) {
  console.log(value);
},
error(err) {
  console.log(err);
},

   })
  }
}
