import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CarsComponent } from './cars/cars.component';
import { CarServiceService } from './services/car-service.service';
import { CarFormComponent } from './car-form/car-form.component';


const appRoutes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'add', component: CarFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [CarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
