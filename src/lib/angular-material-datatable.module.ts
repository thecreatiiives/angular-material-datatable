import {NgModule} from '@angular/core';
import {AngularMaterialDatatableComponent} from './angular-material-datatable.component';
import {CommonModule} from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [AngularMaterialDatatableComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [AngularMaterialDatatableComponent]
})
export class AngularMaterialDatatableModule { }
