import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute) { }
guardarDatos() {
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const apellido = (<HTMLInputElement>document.getElementById('apellido')).value;
    const sede = (<HTMLSelectElement>document.getElementById('sede')).value;
    const carrera = (<HTMLSelectElement>document.getElementById('carrera')).value;

    // Guardar los datos en el Local Storage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('sede', sede);
    localStorage.setItem('carrera', carrera);

    // Mensaje de confirmación
    alert('Datos guardados en el Local Storage.');
  }

  
  ngOnInit() {
    const navigation = window.history.state;
    if (navigation && navigation.username) {
      this.username = navigation.username;
    }
  }
  }

