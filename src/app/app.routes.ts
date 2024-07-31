import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ReportsComponent } from './components/reports/reports.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'add', component: AddTeacherComponent },
    { path: 'report', component: ReportsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ];