import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PositionComponent } from './components/position/position.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionFilterComponent } from './components/position-filter/position-filter.component';
import { PositionPageComponent } from './components/position-page/position-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { EnumToStringPipe } from './pipes/enumToString.pipe';
import { PositionsListComponent } from './components/positions-list/positions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PositionComponent,
    PositionFilterComponent,
    PositionPageComponent,
    ShowDetailsComponent,
    EnumToStringPipe,
    PositionsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
