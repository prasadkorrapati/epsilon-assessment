import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormElementsComponent } from './components/form-elements/form-elements.component';
import { TableFunctionsComponent } from './components/table-functions/table-functions.component';
// import { SortableColumnComponent } from './components/sortable-column/sortable-column.component';
import { SortColumnDirective } from './components/sort-column.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormElementsComponent,
    TableFunctionsComponent,
    SortColumnDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
