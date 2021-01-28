import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  technologiesIcons: any[];

  constructor() {
    this.technologiesIcons = [
      { class: "devicon-csharp-plain ", name: "C#" },
      { class: "devicon-dot-net-plain ", name: ".NET Framework & Core" },
       { class: "devicon-angularjs-plain coored", name: "Angular +2" },
       { class: "devicon-html5-plain ", name: "HTML5" },
       { class: "devicon-css3-plain ", name: "CSS3" },
       { class: "devicon-bootstrap-plain ", name: "Bootstrap" },
       { class: "devicon-javascript-plain ", name: "Javascript" },
       { class: "devicon-typescript-plain ", name: "Typescript" },
       { class: "devicon-jquery-plain ", name: "JQuery" },
       { class: "devicon-github-original ", name: "GitHub" },
       { class: "devicon-git-plain ", name: "GIT" },
      ];
   }

  ngOnInit(): void {
  }

}
