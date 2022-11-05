import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from '../form.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements AfterViewInit {

  

  ngAfterViewInit() {
  }

  constructor(public formService: FormService) { }

  toggleView(){
    this.formService.view = this.formService.view=== 'view_list' ? 'view_module' : 'view_list';
  }

}

