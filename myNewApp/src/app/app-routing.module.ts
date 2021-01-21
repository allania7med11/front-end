import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingStudentComponent } from './components/tracking-student/tracking-student.component';

const routes: Routes = [
  {path:'tracking', component :TrackingStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
