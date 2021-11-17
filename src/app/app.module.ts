import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AppImageFormatterCellComponent } from './app-image-formatter-cell/app-image-formatter-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    AppImageFormatterCellComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([AppImageFormatterCellComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
