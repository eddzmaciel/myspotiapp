import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  private authorizationToken: string = null;

  constructor(private http: HttpClient) {
    console.log("Spotify service ready!!");
    this.getNewToken();
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authorizationToken}`
    });
    return this.http.get(
      `https://api.spotify.com/v1/browse/new-releases?limit=20`,
      {
        headers
      }
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
      "BQAlPIim6ziEdnR8mXvEME5QW3vannQQZVomPBonZT-KgFo5yuf-vxEmpbTP-agpO8l_Yd2Lw3iBsFey8J4";
  }
}
