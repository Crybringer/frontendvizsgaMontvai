import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooldalComponent } from './fooldal/fooldal.component';
import { HistoryComponent } from './history/history.component';
import { ToysComponent } from './toys/toys.component';
import { PlushieComponent } from './plushie/plushie.component';
import { InventoryComponent } from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import { NewPlushieComponent } from './new-plushie/new-plushie.component'

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    HistoryComponent,
    ToysComponent,
    PlushieComponent,
    InventoryComponent,
    NewPlushieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
