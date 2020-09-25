import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListCycleComponent } from './views/cycle/list-cycle/list-cycle.component';
import { CreateCycleComponent } from './views/cycle/create-cycle/create-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCycleComponent,
    CreateCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
