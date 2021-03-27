import { Component, OnInit } from '@angular/core';
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
  constructor() { }

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
    if(this.sortAscending) {
      this.tableData.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
    } else {
      this.tableData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
    }
  }
}
