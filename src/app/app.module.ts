import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './views/home/banner/banner.component';
import { GamesComponent } from './views/home/games/games.component';
import { GaleriaComponent } from './views/home/galeria/galeria.component';
import { GamespagComponent } from './views/gamespag/gamespag.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ContatoComponent } from './views/contato/contato.component';
import { PaginicialComponent } from './views/home/paginicial/paginicial.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    GamesComponent,
    GaleriaComponent,
    GamespagComponent,
    ProdutosComponent,
    ContatoComponent,
    PaginicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
