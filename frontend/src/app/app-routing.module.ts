import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './component/firstpage/firstpage.component';
import { SecondpageComponent } from './component/secondpage/secondpage.component';
import { ThankYouComponent } from './component/thank-you/thank-you.component';


const routes: Routes = [
 { path: '', redirectTo: 'firstpage', pathMatch: 'full' },
 {path: 'firstpage' , component: FirstpageComponent},
  { path : 'secondpage/:id', component : SecondpageComponent },
  {path : 'thankyou' , component:ThankYouComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
