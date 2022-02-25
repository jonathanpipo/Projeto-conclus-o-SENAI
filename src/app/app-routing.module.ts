import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ContatoComponent } from './views/contato/contato.component';
import { GamespagComponent } from './views/gamespag/gamespag.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { PaginicialComponent } from './views/home/paginicial/paginicial.component';


const routes: Routes = [
  {path:'', component: PaginicialComponent},
  {path:'home', component: PaginicialComponent},
  {path:'contato', component: ContatoComponent},
  {path:'gamespag', component: GamespagComponent},
  {path:'produtos', component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
