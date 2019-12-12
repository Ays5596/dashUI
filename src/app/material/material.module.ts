import { NgModule, ViewChild } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material';
import {MatTableModule} from  '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatRadioModule} from '@angular/material/radio'; 
const MaterialComponents= [ MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSliderModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatInputModule,
  MatGridListModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatListModule,
  MatDialogModule,MatRadioModule,
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,MatSidenavModule

];

@NgModule({ 
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { 
  @ViewChild(MatPaginatorModule, {static: true}) paginator: MatPaginatorModule                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;
}
