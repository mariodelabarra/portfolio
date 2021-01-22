import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOptions: any[];

  constructor(private navbarService: NavbarService) { 
    this.menuOptions = navbarService.menu;
  }

  ngOnInit(): void {
  }

}
