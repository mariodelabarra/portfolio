import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
