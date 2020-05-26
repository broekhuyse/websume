import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RunDetailsComponent } from './run-details/run-details.component';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    RunDetailsComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
