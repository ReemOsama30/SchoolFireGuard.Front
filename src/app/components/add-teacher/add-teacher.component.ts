import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TeacherService } from '../../Services/TeacherService/teacher.service';
import { ClassesService } from '../../Services/classService/classes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacherForm = new FormGroup({
    teacherName: new FormControl(''),
    ClassID: new FormControl(0),
    NoOfPresentStudents: new FormControl(0),
    NoOfAbsentStudents: new FormControl(0)
  });

  classOptions: { id: number, className: string }[] = [];

  constructor(
    private teacherService: TeacherService,
    private classService: ClassesService
  ) {}

  ngOnInit(): void {
    this.loadClassNames();
  }

  loadClassNames(): void {
    this.classService.getClassName().subscribe({
      next: (data) => {
        this.classOptions = data;
      },
      error: (err) => console.log('Error loading class names:', err)
    });
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      // Convert ClassID to a number
      const formValue = this.teacherForm.value;
      const classID = Number(formValue.ClassID);

      // Create a new object with ClassID as a number
      const submissionData = {
        ...formValue,
        ClassID: classID
      };

      console.log('Form submitted', submissionData);

      this.teacherService.insertData(submissionData).subscribe({
        next: () => {
          console.log('Submission successful');
          alert('Form submitted successfully!');
          this.teacherForm.reset();
        },
        error: (err) => {
          console.error('Submission error details:', err);
          alert('Submission failed, please check the console for details.');
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
