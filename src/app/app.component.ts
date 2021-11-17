import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { address } from 'faker';
import { AppImageFormatterCellComponent } from './app-image-formatter-cell/app-image-formatter-cell.component';
import { DatasetGeneratorService } from './dataset-generator.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  columnDefs = []
  rowData = []
  dataset = [];
  categories = []
  constructor(private dataService: DatasetGeneratorService){

  }
  ngOnInit(){

    let localDataset = JSON.parse(localStorage.getItem('edgeHome'));
    if (!localDataset){
      this.dataset = this.dataService.getRandomDataset();
    }else {
      this.dataset = localDataset;
    }

  this.initiateGridValues();
  }

  initiateGridValues(){
    this.rowData= this.dataset;
    Object.keys(this.dataset[0]).forEach((header,index) => {
      if (index <1){
        this.columnDefs.push({headerName: header, field: header, width: 60, sortable: false, autoHeight: true, cellRendererFramework: AppImageFormatterCellComponent});
      }else 
      this.columnDefs.push({headerName: header, field: header});
    })
  }
}

