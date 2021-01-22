import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingStudentComponent } from './components/tracking-student/tracking-student.component';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';

const routes: Routes = [
  {path:'tracking', component :TrackingStudentComponent},
  {path:'table', component :TableBasicExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
