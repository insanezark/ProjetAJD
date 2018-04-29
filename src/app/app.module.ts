import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';



//import { AppService } from './service/app.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ContactComponent } from './Contact/contact.component';
import { AchatComponent } from './Achat/achat.component';
import { VenteComponent } from './Vente/vente.component';
import { QuiComponent } from './Qui/qui.component';
import { AppRoutingModule } from './app-routing.module';
import { SneakersService } from './sneakers.service';

@NgModule({
  export: [
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    VenteComponent,
    AchatComponent,
    QuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
  SneakersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
