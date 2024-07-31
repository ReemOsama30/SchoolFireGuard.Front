import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InsertDataComponent } from './components/insert-data/insert-data.component';
import { ReportsComponent } from './components/reports/reports.component';

export const routes: Routes = [

{path:'home',component:HomeComponent},
{path:'insert',component:InsertDataComponent},
{
path:'Report',component:ReportsComponent
}
,
{path:"",redirectTo:"home",pathMatch: 'full'}





];
