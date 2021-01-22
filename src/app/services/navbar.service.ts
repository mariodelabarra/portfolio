import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  menu: any[] = [
        { title: 'Inicio', url: '/'},
        { title: 'Acerca', url: '/'},
        { title: 'Habilidades', url: '/'},
        { title: 'Proyectos', url: '/'},
        { title: 'Contacto', url: '/'},
  ];

  constructor() { }
}
