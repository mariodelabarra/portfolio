import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  menu: any[] = [
        { title: 'Home', url: 'home'},
        { title: 'About', url: 'about'},
        { title: 'Skills', url: 'skills'},
        { title: 'Projects', url: 'projects'},
        { title: 'Contact', url: 'contact'},
  ];

  constructor() { }
}
