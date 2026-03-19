import { Routes } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  // Route for displaying supplier list
  { path: 'suppliers-list', component: SuppliersListComponent },
  // Parameterized route for supplier details (uses ID)
  { path: 'suppliers/:id', component: SupplierDetailsComponent },
  // Redirect empty path to suppliers page
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' }
];