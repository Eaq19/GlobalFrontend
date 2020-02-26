import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: 'BQA9KLIAIOI4MTAoHKsnqI9aZcGlL4cDulkLP05xBnm9-XxobKQDPVN3uwqRiEMaqZFLJDV-f-_QyyRpBeo';
  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${ query }`;
    const HEADERS = new HttpHeaders({
      Authorization: `Bearer ${ this.token }`
    });
    return this.http.get(URL, { headers: HEADERS});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO&limit=20&offset=0').pipe(map((resp: any) => resp.albums.items ));
  }

  getSearchArtist(artist: string) {
    return this.getQuery(`artists/${ artist }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe(map((resp: any) => resp.tracks ));
  }
  
  getToken() {
    //const URL = `https://accounts.spotify.com/authorize?client_id=654cc047ab414062b29aebe03009a48c&response_type=token&redirect_uri=http://localhost:4200/&client_secret =0a7cbe5456454b0aabe804e8394cf2d4`;
    //window.location.href = URL;
  }

}
