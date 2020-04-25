import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//observable example
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
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
      Authorization: `Bearer ${this.authorizationToken}`,
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    //using a pipe and map for transform the data as we need it
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data) => data["albums"].items)
    );
  }

  getArtists(name: string) {
    //reusing the same query  and giving format to the response data using the pipe
    return this.getQuery(`search?q=${name}&type=artist&limit=15`).pipe(
      map((data) => data["artists"].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map((data) => {
    //   console.log('Artista: ', data);
    //   data = data;
    // }));
  }


  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`);
  }


  getNewToken() {
    // console.log("getNewToken says: somebody is calling me!");

    // const httpHeaders = new HttpHeaders({
    //   "Content-Type": "application/x-www-form-urlencoded",
    //   "Cache-Control": "no-cache",
    // });

    // const body = {
    //   grant_type: "client_credentials",
    //   client_id: "a9674df9c0154fb8960cb0446e33f46f",
    //   client_secret: "2b483ec2ac0544fbbf741949e417816f",
    // };

    // let generateToken: string;
    // this.http
    //   .post(
    //     "https://accounts.spotify.com/api/token",
    //     body,
    //     { headers: httpHeaders }
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    // this.authorizationToken = generateToken;
    this.authorizationToken =
      "--BQADK2BuCa2ujheXANk244ZN8GajQ5QYCNRneXBXxAl3OSJly0O7SAN9P1goXDgNz-7WAw7zZI7lvYDyHE4";
  }
}
