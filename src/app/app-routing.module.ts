import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarchartComponent} from './barchart/barchart.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'dash', component:DashboardComponent},
  {path: 'bar-chart', component: BarchartComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'details', component: UserDetailsComponent},
  {path:'', redirectTo:"/dash",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
