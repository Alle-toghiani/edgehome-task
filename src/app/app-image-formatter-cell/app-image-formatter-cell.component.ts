import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-image-formatter-cell',
  templateUrl: './app-image-formatter-cell.component.html',
  styleUrls: ['./app-image-formatter-cell.component.scss']
})
export class AppImageFormatterCellComponent implements OnInit {
  params: any;
  agInit(params: any): void{
    this.params = params.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
