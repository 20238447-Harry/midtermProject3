import { Routes } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';

export const routes: Routes = [
  { path: 'suppliers', component: SuppliersListComponent },
  { path: 'suppliers/:id', component: SupplierDetailsComponent },
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' }
];