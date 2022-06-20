import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AtelierComponent } from './atelier/atelier.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';

const routes: Routes = [
  {path: '', component: ListKittenComponent},
  {path: 'atelier', component: AtelierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
