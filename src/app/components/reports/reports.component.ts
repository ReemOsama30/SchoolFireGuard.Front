import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeacherService } from '../../Services/TeacherService/teacher.service';
import { CommonModule } from '@angular/common';
import { ClassesService } from '../../Services/classService/classes.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'] // Fixed the typo here from `styleUrl` to `styleUrls`
})
export class ReportsComponent implements OnInit {
  teachers: any[] = []; // Corrected initialization
  totalClass: number = 0; 
  totalStudent: number = 0;
  submittedStudents: number = 0;

  constructor(private teacherService: TeacherService, private classService: ClassesService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    
    this.teacherService.getAllTeachers().subscribe({
      next: (value) => { 
        this.teachers = value;
       
      },
      error: (err) => { 
        console.error(err);
      }
    });
  
    this.classService.getTotalClasses().subscribe({
      next: (value) => {
        this.totalClass = value; 
      },
      error: (err) => {
        console.error(err);
      }
    });

 
    this.classService.getTotalStudents().subscribe({
      next: (value) => {
        this.totalStudent = value; 
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  calculateProgress(pesentStudents: number): number {

    return this.totalStudent > 0 ? Math.round((pesentStudents / this.totalStudent) * 100 * 10) / 10 : 0;
  }

  calculateOverallProgress(): number {
    const totalPresent = this.teachers.reduce((sum, teacher) => sum + teacher.pesentStudents, 0);
   
    return this.totalStudent > 0 ? Math.round((totalPresent / this.totalStudent) * 100 * 10) / 10 : 0;
  }
  Reset(){
   
    this.teacherService.ResetAll()
    .subscribe(() => {
  
      this.teachers = [];
      this.totalClass = 0;
      this.totalStudent = 0;
      this.submittedStudents = 0;
alert("Reseted successfully");
   
   
    }, (error) => {
     
    });
}    
  }

