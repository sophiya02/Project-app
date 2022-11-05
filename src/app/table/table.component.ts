import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA, EmployeeElement } from 'src/resources/shared.resources';
import { FormService } from '../form.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'position', 'about', 'joining_date'];
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public formService: FormService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.formService.dataSource.paginator = this.paginator;
  }


}


