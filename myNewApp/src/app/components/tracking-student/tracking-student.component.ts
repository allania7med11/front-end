

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'tracking-student.component',
  styleUrls: ['tracking-student.component.scss'],
  templateUrl: 'tracking-student.component.html',
})
export class TrackingStudentComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'classe'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  firstName: string;
  
  lastName: string;
  classe: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstName: 'Ahmed', lastName: 'Rafrafi', classe: 'H'}
  
];
