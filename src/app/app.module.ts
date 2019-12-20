import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserNavComponent} from './header/user-nav/user-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MaterialModule} from './material/material.module';
import {RouterModule, Routes} from '@angular/router';
import {SampleComponent} from './utility/sample/sample.component';
import {MatGridListModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  {path: '', component: SampleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserNavComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
