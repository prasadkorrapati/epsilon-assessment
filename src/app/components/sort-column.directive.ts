import { Directive, ElementRef, HostListener, Input, KeyValueDiffers, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSortColumn]'
})
export class SortColumnDirective implements OnChanges, OnInit {

  constructor(private elementRef: ElementRef,
    private differs: KeyValueDiffers) { }
  ngOnInit(): void {
    // this.differ = this.differs.find(this.user).create();
  }
  @Input() colName: string;
  @Input() sortColumn: string;
  @Input() sortOrder: boolean;
  ngOnChanges(changes: SimpleChanges): void {
    for(const key in changes) {
      const property = changes[key];
      console.log(key, `current Value is: ${property.currentValue} and ${property.previousValue}`);
      if(key === 'sortOrder' || key === 'sortColumn') {

          const sortElement = this.elementRef.nativeElement.children[0]
          if(this.sortColumn === this.colName) {
            sortElement.classList.remove('disabled');
              if(this.sortOrder ) {
                sortElement.classList.remove('fa-chevron-up');
                sortElement.classList.add('fa-chevron-down');
              } else {
                sortElement.classList.remove('fa-chevron-down');
                sortElement.classList.add('fa-chevron-up');
              }
          } else {
            sortElement.classList.add('disabled')
          }
      }
    }
  }

  


}
