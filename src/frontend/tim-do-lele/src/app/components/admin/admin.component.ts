import { Component } from '@angular/core';
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css' 
import { AG_GRID_LOCALE_PT_BR } from './localeText'
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {


}
