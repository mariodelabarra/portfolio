import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { animation } from '@angular/animations';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
    { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
    { path: 'skills', component: SkillsComponent, data: {animation: 'SkillsPage'} },
    { path: 'projects', component: ProjectsComponent, data: {animation: 'ProjectPage'} },
    { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}