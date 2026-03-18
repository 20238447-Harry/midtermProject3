import { Routes } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';

export const routes: Routes = [
  // Route for displaying supplier list
  { path: 'suppliers', component: SuppliersListComponent },
  // Parameterized route for supplier details (uses ID)
  { path: 'suppliers/:id', component: SupplierDetailsComponent },
  // Redirect empty path to suppliers page
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' }
];