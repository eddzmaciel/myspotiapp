import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//service
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      // console.log('receiving params:', params);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe((response) => {
      this.artista = response;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe((response) => {
      console.log('response: ', response);
      this.topTracks = response;
    });

  }





}
