import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppImageFormatterCellComponent } from './app-image-formatter-cell.component';

describe('AppImageFormatterCellComponent', () => {
  let component: AppImageFormatterCellComponent;
  let fixture: ComponentFixture<AppImageFormatterCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppImageFormatterCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppImageFormatterCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
