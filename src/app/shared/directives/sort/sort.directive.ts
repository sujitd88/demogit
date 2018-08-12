/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class  SortDirective
 * This directive is used to render sort icons on list interfaces
 * @example
 * <span drc-sort [columnName]="'nameofthecolumn'" [sortOrder]="sortOrder" (click)="setSortParams('nameofthecolumn')" 
 * [sortColumn]="sortColumn" aria-hidden="true" title=""></span>
 * @input
 * sortColumn -> The column on which sorting is being currently performed. This is used by getSortClass() to decide on the icons to be used
 * columnName -> The name of the column on which the directive is being applied
 * sortOrder  -> Current order of sorting (true if descending & false if ascending)
 */
import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[drcSort]'
})
export class SortDirective implements OnChanges {
  @Input() sortColumn: string;
  @Input() columnName: string;
  @Input() sortOrder: boolean;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, ) {
    // Set the initial class of the element to 'fa'.
    this.renderer.addClass(this.elementRef.nativeElement, 'fa');
  }
  // Change the currently assigned class on every change of Input variables.
  ngOnChanges(changes: SimpleChanges): void {
    this.getSortClass();
  }

  // Assign appropriate icon class based on currently selected sorting column and sort order
  getSortClass() {
    if (this.sortColumn === '' || this.sortColumn !== this.columnName) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort-desc');
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort-asc');
      this.renderer.addClass(this.elementRef.nativeElement, 'fa-sort');
    } else if (this.sortColumn === this.columnName && this.sortOrder === true) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort');
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort-desc');
      this.renderer.addClass(this.elementRef.nativeElement, 'fa-sort-asc');
    } else if (this.sortColumn === this.columnName && this.sortOrder === false) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort');
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort-asc');
      this.renderer.addClass(this.elementRef.nativeElement, 'fa-sort-desc');
    }
  }
}
