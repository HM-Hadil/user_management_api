import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    { path: '', component: HomeComponent,

     },
    { path: 'table', component: TableComponent },

  ];
