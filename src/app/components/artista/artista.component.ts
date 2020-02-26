import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artist: any = {};
  topTracks: any = [];
  error: boolean = false;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.error = false;
    this.router.params.subscribe(result => {
      this.getArtist(result.id);
      this.getTopTracks(result.id);
    });
  }

  ngOnInit(): void {
  }

  getArtist(id: string) {
    this.spotify.getSearchArtist(id).subscribe((resp: any) => {
      this.artist = resp;
    }, (error) => {
      this.error = true;
      this.spotify.getToken();
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((resp: any) => {
      this.topTracks = resp;
      console.log(this.topTracks);
    }, (error) => {
      this.spotify.getToken();
    });
  }

}
