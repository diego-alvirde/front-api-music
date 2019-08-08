import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlbumModel } from '../models/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: any[] = [];
  constructor(private albumService:ApiService) { }

  ngOnInit() {    
    this.albumService.getAlbums().subscribe( (resp:any) => {
      this.albums = resp;
    })
  }

}
