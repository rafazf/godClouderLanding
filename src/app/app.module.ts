import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchDomainComponent } from './shared/search-domain/search-domain.component';
import { DomainPriceComponent } from './shared/domain-price/domain-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchDomainComponent,
    DomainPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
