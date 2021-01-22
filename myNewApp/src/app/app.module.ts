import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackingStudentComponent } from './components/tracking-student/tracking-student.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingStudentComponent,
    TableBasicExampleComponent
  ],
  imports: [
    MatPaginatorModule,
    
    MatTableModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
