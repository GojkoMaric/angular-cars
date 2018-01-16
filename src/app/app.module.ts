import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CarsComponent } from './cars/cars.component';
import { CarServiceService } from './services/car-service.service';


const appRoutes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'cars', component: CarsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [CarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
