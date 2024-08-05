// app-routing.module.ts or wherever your routes are defined
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', title: 'Home | @PPekKunGzDev', component: HomeComponent },
  { path: 'about', title: 'About | @PPekKunGzDev', component: AboutComponent },
  { path: 'portfolio', title: 'Portfolio | @PPekKunGzDev', component: PortfolioComponent },
  { path: 'contact', title: 'Contact | @PPekKunGzDev', component: ContactComponent },
  { path: '**', title: '404 Not Found | @PPekKunGzDev', pathMatch: 'full', component: PageNotFoundComponent }
];