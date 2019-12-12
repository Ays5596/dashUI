import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule} from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BarchartComponent } from './barchart/barchart.component';
import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashService } from './dash.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback/feedback.component';
import { FootComponent } from './foot/foot.component';
import { HeadComponent } from './head/head.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarchartComponent,
    FeedbackComponent,
    FootComponent,
    HeadComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ChartsModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,ReactiveFormsModule,FormsModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA],
  providers: [DashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
