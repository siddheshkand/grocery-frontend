import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserNavComponent} from './header/user-nav/user-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from './material/material.module';
import {RouterModule, Routes} from '@angular/router';
import {SampleComponent} from './utility/sample/sample.component';
import {BuyerComponent} from './buyer/buyer.component';
import {AdminComponent} from './admin/admin.component';
import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './buyer/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    UserNavComponent,
    SampleComponent,
    BuyerComponent,
    AdminComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
