import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NuevoComponent } from './nuevo/nuevo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './album/album.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevoComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
