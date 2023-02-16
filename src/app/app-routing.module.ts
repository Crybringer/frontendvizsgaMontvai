import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { HistoryComponent } from './history/history.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NewPlushieComponent } from './new-plushie/new-plushie.component';
import { ToysComponent } from './toys/toys.component';

export const routes: Routes = [
  {path: '' , component: FooldalComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'toys', component: ToysComponent},
  {path: 'inverotry', component: InventoryComponent},
  {path: 'new-plushie', component: NewPlushieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
