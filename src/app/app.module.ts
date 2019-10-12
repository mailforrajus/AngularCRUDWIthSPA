import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomDirectiveDirective } from './custom-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([
      { path: "", component: FirstComponentComponent }, { path: "secondComponent", component: SecondComponentComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
