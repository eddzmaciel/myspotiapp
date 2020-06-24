import { Component, OnInit } from "@angular/core";

// services
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit() { }

  onSearch(name: string) {
    this.loading = true;
    //console.log('to find: ', name);
    if (name !== '') {
      this.spotify.getArtists(name).subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }

  }
}
