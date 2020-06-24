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
  tokenError: boolean;
  message: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
  }

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.tokenError = false;
        this.newReleases = data;
        this.loading = false;
      },
      (serviceError) => {
        console.info("Error: ", serviceError.error.error.message);
        this.loading = false;
        this.tokenError = true;
        this.message = serviceError.error.error.message;
        // this.getToken();
      }
    );
  }

  getToken() {
    this.spotifyService.getNewToken();
  }
}
