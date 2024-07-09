import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AsyncPipe,
    ReactiveFormsModule
  ],
  // providers: [
  //   provideAnimations(),
  //   provideHttpClient(),
  //   importProvidersFrom(MatNativeDateModule),
  //   provideMomentDateAdapter()
  // ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
