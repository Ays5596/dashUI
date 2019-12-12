import { Component, OnInit } from '@angular/core';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // public dataSource;
  private details:any;
  // private columns: string[];
  dataSource: any;
  displayedColumns: string[] = ['_employeeid','employeename', 'employeescore', 'testname'];


  constructor(private httpClientService:DashService) { }
  
  ngOnInit() {
    // this.columns = this.httpClientService.getColumns();
  
    this.httpClientService.getDetails().subscribe(
      response => {this.details = response; 
        console.log(response);
        this.dataSource=response;
      });
  }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
