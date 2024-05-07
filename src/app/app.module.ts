import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PositionComponent } from './position/position.component';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionPageComponent } from './position-page/position-page.component';
import { PositionFilterComponent } from './position-filter/position-filter.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PositionComponent,
    PositionListComponent,
    PositionPageComponent,
    PositionFilterComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
