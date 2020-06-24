import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];
  artistId: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openArtist(item) {
    if (item.type === "artist") {
      this.artistId = item.id;
    } else {
      this.artistId = item.artists[0].id
    }
    console.log('this.artistId: ', this.artistId);
    this.router.navigate(['/artist', this.artistId]);
  }

}
