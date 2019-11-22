import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//importing services
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  constructor(private spotify: SpotifyService) {}

  ngOnInit() {}

  buscar(term: string) {
    console.log(term);
    this.spotify.getArtist(term).subscribe();
  }
}
