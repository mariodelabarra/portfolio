import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  menu: any[] = [
        { title: 'Inicio', url: 'home'},
        { title: 'Acerca', url: 'about'},
        { title: 'Habilidades', url: 'skills'},
        { title: 'Proyectos', url: 'projects'},
        { title: 'Contacto', url: 'contact'},
  ];

  constructor() { }
}
