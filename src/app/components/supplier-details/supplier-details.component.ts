import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.interface';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.css'
})
export class SupplierDetailsComponent implements OnInit {

  supplier: Supplier | undefined;
  supplierId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
      // Subscribe to route parameters to get the supplier ID
    this.route.params.subscribe(params => {
      this.supplierId = Number(params['id']);
      // Retrieve supplier data using the service
      this.supplier = this.supplierService.getSupplierById(this.supplierId);

    });

  }
  // Saves updated supplier data to the service
  saveChanges(): void {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplier);
      alert('Supplier updated successfully!');
    }
  }
  // Navigates back to suppliers list
  goBack(): void {
    this.router.navigate(['/suppliers-list']);
  }

}