import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SignInService } from './pages/sign-in/sign-in.service';
import { SignInComponent } from './pages/sign-in/sign-in.component';

import { HttpClientModule }   from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CanRedirectToHomeGuard } from './core/guards/can-redirect-to-home.guard';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    LocalStorageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HomeModule
  ],
  providers: [SignInService, CanRedirectToHomeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
