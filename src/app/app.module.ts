import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//using my http client module for angular
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { CardComponent } from './components/shared/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// routes
import { ROUTES } from "./app.routes";

//pipes 
import { DomseguroPipe } from "./pipes/domseguro.pipe";
import { NoimagePipe } from "./pipes/noimage.pipe";

//importing services
//import { SpotifyService } from "./services/spotify.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    CountriesComponent,
    NoimagePipe,
    DomseguroPipe,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
