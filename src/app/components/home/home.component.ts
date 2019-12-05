import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//importing services
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
    });
  }
}
