import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { address } from 'faker';
import { AppImageFormatterCellComponent } from './app-image-formatter-cell/app-image-formatter-cell.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'edgehome';
  columnDefs = []
  rowData = []
  dataset = [];
 categories = []

  ngOnInit(){

  Object.keys(faker).forEach(element => {
    this.categories.push({title: element, data: Object.keys(faker[element])});
  })
  this.categories = this.categories.filter( element =>
    ( element.title !=='commerce')
  )
  this.categories[14].data = this.categories[14].data.slice(0,1);
  // this.categories = this.categories.sort((a,b)=> {
  //   return b.title === 'image'? 1 : -1;
  // })
  let arraySwapTemp = this.categories[10];
  console.log(this.categories);
  this.categories[10] = this.categories[14];
  this.categories[14] = arraySwapTemp;
  // let rowsCount = 0;
let exitLoop = false;
  loop1:
for(let rowsCount = 0 ; rowsCount<199;){
        let columnsCount = 0;
        let row = {};
        exitLoop = false;
        loop2: 
          for ( let categoryIndex = 10 ; categoryIndex< this.categories.length; categoryIndex++){
            loop3:
              for (let subCat = 0; subCat< this.categories[categoryIndex].data.length; subCat++){
              let temp1 = faker.fake(`{{${this.categories[categoryIndex].title}.${this.categories[categoryIndex].data[subCat]}}}`);
              
              if (categoryIndex > 10){
                row[this.categories[categoryIndex].data[subCat]] = temp1.substring(0, 10);
              } else {
                row[this.categories[categoryIndex].data[subCat]] = temp1;
              }
              // this.dataset.push(`{{${this.categories[categoryIndex].title}.${this.categories[categoryIndex].data[subCat]}}}`);
              columnsCount++;
              if(columnsCount == 99){
                this.dataset.push(row);
                rowsCount++;
                row = {};
                let categoryIndex = 10
                exitLoop = true;
                break;
              }
              }
              if (exitLoop)
              break;
          }
      }
    console.log(faker.fake(`{{image.imageUrl}}`));
    this.rowData= this.dataset;
    Object.keys(this.dataset[0]).forEach((header,index) => {
      if (index <1){
        this.columnDefs.push({headerName: header, field: header, width: 60, sortable: false, autoHeight: true, cellRendererFramework: AppImageFormatterCellComponent});
      }else 
      this.columnDefs.push({headerName: header, field: header});
    })
    console.log(this.columnDefs);
  }
}

