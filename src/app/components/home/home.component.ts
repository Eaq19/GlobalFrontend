import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  error: boolean = false;

  constructor(private spotifyService: SpotifyService, private router: Router) {
    this.error = false;
  }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe((resp: any) => {
      this.newReleases = resp;
      console.log(this.newReleases);
    }, (error) => {
      this.error = true;
      this.spotifyService.getToken();
    });
  }

  viewArtist(artist: any){
    console.log('Artista');
    this.router.navigate(['/artista', artist.id]);
  }

}
