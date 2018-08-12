/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class  AppModule
 * This module consists of shared modules, directives and pipes which are to be consumed by feature modules of the application.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// --------------------------------------- //
import { SearchPipe, SortPipe } from './pipes';
import { SearchComponent, NoRecordsComponent, PaginationComponent } from './components';
import { SortDirective } from './directives';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        SearchPipe,
        SortPipe,
        SortDirective,
        SearchComponent,
        NoRecordsComponent,
        PaginationComponent,
    ],
    exports: [
        SearchPipe,
        SortPipe,
        SortDirective,
        SearchComponent,
        NoRecordsComponent,
        PaginationComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
