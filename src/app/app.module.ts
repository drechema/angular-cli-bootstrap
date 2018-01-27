import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { IrisComponent } from './components/iris/iris.component';

import { IrisApiService } from './services/iris-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IrisComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    IrisApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
