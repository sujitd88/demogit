/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class  PaginationComponent
 * @example 
 * <drc-pagination [items]="allRecords" (pageChanged)="onSetPage($event)" [pageSize]="10"></drc-pagination>
 * The component provides an application wide pagination. 
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'drc-pagination',
  templateUrl: './pagination.component.html'
})

export class PaginationComponent {
  
  @Input() items: any = [];
  @Input("pageSize") pageSize = 10;
  @Output() pageChanged = new EventEmitter();

   // pager object
   pager: any = {};
   pagesCount: any;
   pagesCnt: any;

  constructor() {
    
  }

  ngOnChanges() {
    if(this.items != undefined){
      this.pagesCount = this.items.length;
      this.pagesCnt = Math.ceil(this.items.length / this.pageSize);
      // initialize to page 1
      this.setPage(1);
    }
  }

  setPage(page: number) {
      if (page < 1 || page > this.pagesCnt) {
          return;
      }
      // get pager object from service
      this.pager = this.getPager(this.pagesCount, page, this.pageSize);
  }

  getPager(totalItems: number, currentPage: number, pageSize: number) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = _.range(startPage, endPage + 1);
    this.pageChanged.emit(currentPage);
    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}
}
