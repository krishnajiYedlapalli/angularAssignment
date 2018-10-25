import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { KriComponent } from './kri/kri.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CustomPipe } from './pipes';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { AscendingPipe } from './ascending.pipe';
import { DescendingPipe } from './descending.pipe';
import { HighOrLowPipe } from './high-or-low.pipe';



@NgModule({
  declarations: [
    AppComponent,
    KriComponent,
    LifecycleComponent,
   CustomPipe,
   WarningComponent,
   SuccessComponent,
   AscendingPipe,
   DescendingPipe,
   HighOrLowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
