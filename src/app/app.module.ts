import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StorageServiceModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
