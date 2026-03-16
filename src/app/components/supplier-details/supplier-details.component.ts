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

    this.route.params.subscribe(params => {

      this.supplierId = Number(params['id']);

      this.supplier = this.supplierService.getSupplierById(this.supplierId);

    });

  }

  saveChanges(): void {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplier);
      alert('Supplier updated successfully!');
    }
  }

  goBack(): void {
    this.router.navigate(['/suppliers']);
  }

}