import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//prueba togle
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// reactive module
import { ReactiveFormsModule } from '@angular/forms';
// modulos para api
import { HttpClientModule } from '@angular/common/http';




//Angular material 
// aca importo los modulos   // el {} se lleva a impor de mas abajo

import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// inpunt form file 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

// side menu
import {MatMenuModule} from '@angular/material/menu';
//mat card
import {MatCardModule} from '@angular/material/card';
// grid material 
import {MatGridListModule} from '@angular/material/grid-list';
//form module
import { FormsModule } from '@angular/forms';
// para mostrar el mensaje al pasar por los botones 

import {MatTooltipModule} from '@angular/material/tooltip';

// para form de fechas 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';




// necesario para el autorelleno
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';










//spiner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatProgressBarModule} from '@angular/material/progress-bar';

 import { SpinnerComponent } from './spinner/spinner.component';





@NgModule({
  declarations: [

  SpinnerComponent
  ],



  imports: [
  
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgFor,
    AsyncPipe,
    MatAutocompleteModule
   
    
    
   
  




  ], 

  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SpinnerComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    NgFor,
    AsyncPipe,
    MatAutocompleteModule
    
  
   
  ]
})
export class SharedModule { }
