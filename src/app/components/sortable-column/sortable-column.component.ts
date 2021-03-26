import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable-column',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.scss']
})
export class SortableColumnComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

}
