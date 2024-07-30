import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert-data.component.html',
  styleUrl: './insert-data.component.css'
})


export class InsertDataComponent {

  teacherName: string='';
  class: string='';
  presentStudents: number=0;
  absentStudents: number=0;


  onSubmit() {
    // Add your form submission logic here
    console.log('Form submitted');
    console.log('Teacher Name:', this.teacherName);
    console.log('Class:', this.class);
    console.log('Present Students:', this.presentStudents);
    console.log('Absent Students:', this.absentStudents);
  }
}
