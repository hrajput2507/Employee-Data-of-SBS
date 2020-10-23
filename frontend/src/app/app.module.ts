import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondpageComponent } from './component/secondpage/secondpage.component';
import { RouterModule } from '@angular/router';
import { FirstpageComponent } from './component/firstpage/firstpage.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './component/thank-you/thank-you.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    SecondpageComponent,
    FirstpageComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
     RouterModule,
     HttpClientModule,
     BrowserAnimationsModule,
     MatFormFieldModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatMomentDateModule,
     MatInputModule,
    

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
