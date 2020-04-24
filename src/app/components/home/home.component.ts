import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//importing services
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
  }

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.loading = false;
      },
      (error) => {
        console.info("Error: ", error.error.error.message);
        // this.getToken();
      }
    );
  }

  getToken() {
    this.spotifyService.getNewToken();
  }
}
