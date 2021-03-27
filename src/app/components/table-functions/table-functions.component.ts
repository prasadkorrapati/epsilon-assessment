import { Component, OnInit } from '@angular/core';
import { TableServiceService } from '../table-service.service';
import * as cookies from './../../../assets/json/cookies.json';
@Component({
  selector: 'app-table-functions',
  templateUrl: './table-functions.component.html',
  styleUrls: ['./table-functions.component.scss']
})
export class TableFunctionsComponent implements OnInit {

  tableData: any;
  sortColumn = 'name';
  sortAscending = true;

  constructor(private tableServiceService: TableServiceService) { }

  ngOnInit(): void {
    this.tableData = cookies.default;
    this.sort(this.sortColumn); // By default sort on name column
  }

  sort(colName) {
    if(this.sortColumn !==colName) {
      this.sortAscending = true;
      this.sortColumn = colName;
    } else {
      this.sortAscending = !this.sortAscending;
    }
    this.tableServiceService.sort(this.tableData, this.sortAscending, this.sortColumn);
  }
}
