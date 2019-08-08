import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  forma:FormGroup

  constructor(private albumService:ApiService) { 
    this.forma = new FormGroup({
      titulo: new FormControl("", [Validators.required]),
      lanzado: new FormControl("", [Validators.required]),
      precio: new FormControl("", [Validators.required]),
      genero: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
  }

  guardarCambios(){    
    this.albumService.crearAlbum(this.forma.value);
  }
  
}
