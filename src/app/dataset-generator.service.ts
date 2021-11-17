import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class DatasetGeneratorService {
  columnDefs = []
  rowData = []
  dataset = [];
  categories = []
  constructor() { }

  getRandomDataset(){
    this.generateAndCleanColumnNames();
    return this.generateJson();
  }
  generateJson(){
    let exitLoop = false;
    for(let rowsCount = 0 ; rowsCount<199;){
        let columnsCount = 0;
        let row = {};
        exitLoop = false;
          for ( let categoryIndex = 10 ; categoryIndex< this.categories.length; categoryIndex++){
              for (let subCat = 0; subCat< this.categories[categoryIndex].data.length; subCat++){
              let temp1 = faker.fake(`{{${this.categories[categoryIndex].title}.${this.categories[categoryIndex].data[subCat]}}}`);
              
              if (categoryIndex > 10){
                row[this.categories[categoryIndex].data[subCat]] = temp1.substring(0, 10);
              } else {
                row[this.categories[categoryIndex].data[subCat]] = temp1;
              }
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
      localStorage.setItem('edgeHome', JSON.stringify(this.dataset));
      return this.dataset;
  }

  generateAndCleanColumnNames(){
    Object.keys(faker).forEach(element => {
      this.categories.push({title: element, data: Object.keys(faker[element])});
    })
    this.categories = this.categories.filter( element =>
      ( element.title !=='commerce'))
    this.categories[14].data = this.categories[14].data.slice(0,1);
    let arraySwapTemp = this.categories[10];
    this.categories[10] = this.categories[14];
    this.categories[14] = arraySwapTemp;

  }

}
