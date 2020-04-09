import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  private authorizationToken: string = null;

  constructor(private http: HttpClient) {
    console.log("Spotify service ready!!");
    this.getNewToken();
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authorizationToken}`
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    //using map for transform the data as we need it
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtist(value: string) {
    //reusing the same query
    return this.getQuery(`search?q=${value}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }

  getNewToken() {
    // const headers = new HttpHeaders({
    //   grant_type: "client_credentials",
    //   client_id: "a9674df9c0154fb8960cb0446e33f46f",
    //   client_secret: "2b483ec2ac0544fbbf741949e417816f"
    // });
    // let generateToken: String;
    // this.http
    //   .post(`https://accounts.spotify.com/api/token`, { headers })
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    this.authorizationToken =
      "BQBDGzOb180yu9KaTxZGCQ5B_6QaewQkcJTiSdMmFYCuLOGlBuaMIh_ObpmhlgSKkongNfq8tuOAzQWHwQI";
  }
}
