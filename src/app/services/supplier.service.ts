import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliers: Supplier[] = [
    {
      id: 1,
      supplierName: 'TechSource Inc',
      location: 'USA',
      email: 'contact@techsource.com',
      contactPerson: 'John Smith',
      phone: '123-456-7890',
      productsSupplied: ['Laptops', 'Monitors']
    },
    {
      id: 2,
      supplierName: 'Global Electronics',
      location: 'Japan',
      email: 'sales@globalelec.jp',
      contactPerson: 'Akira Tanaka',
      phone: '111-222-3333',
      productsSupplied: ['Processors', 'Motherboards']
    },
    {
      id: 3,
      supplierName: 'Smart Devices Ltd',
      location: 'UK',
      email: 'info@smartdevices.co.uk',
      contactPerson: 'Emma Wilson',
      phone: '222-333-4444',
      productsSupplied: ['Smartphones', 'Tablets']
    },
    {
      id: 4,
      supplierName: 'Future Tech',
      location: 'Germany',
      email: 'hello@futuretech.de',
      contactPerson: 'Hans Muller',
      phone: '333-444-5555',
      productsSupplied: ['Graphics Cards']
    },
    {
      id: 5,
      supplierName: 'Digital Hub',
      location: 'Singapore',
      email: 'support@digitalhub.sg',
      contactPerson: 'Wei Zhang',
      phone: '444-555-6666',
      productsSupplied: ['Storage Devices']
    },
    {
      id: 6,
      supplierName: 'NextGen Supplies',
      location: 'Canada',
      email: 'info@nextgen.ca',
      contactPerson: 'David Brown',
      phone: '555-666-7777',
      productsSupplied: ['Servers']
    },
    {
      id: 7,
      supplierName: 'Prime Electronics',
      location: 'South Korea',
      email: 'contact@primekr.com',
      contactPerson: 'Kim Lee',
      phone: '666-777-8888',
      productsSupplied: ['Displays']
    },
    {
      id: 8,
      supplierName: 'PowerTech',
      location: 'China',
      email: 'sales@powertech.cn',
      contactPerson: 'Li Wei',
      phone: '777-888-9999',
      productsSupplied: ['Power Supplies']
    },
    {
      id: 9,
      supplierName: 'Nano Systems',
      location: 'Taiwan',
      email: 'info@nanosys.tw',
      contactPerson: 'Chen Yu',
      phone: '888-999-0000',
      productsSupplied: ['Chips']
    },
    {
      id: 10,
      supplierName: 'Infinity Hardware',
      location: 'Australia',
      email: 'contact@infinity.au',
      contactPerson: 'James Clark',
      phone: '999-000-1111',
      productsSupplied: ['Networking Devices']
    }
  ];

  // Returns all supplier data
  getSuppliers(): Supplier[] {
  return this.suppliers;
}
  // Finds a supplier by ID using array find()
  getSupplierById(id: number): Supplier | undefined {
  return this.suppliers.find(s => s.id === id);
}
  // Updates a supplier by finding its index and replacing it
  updateSupplier(updatedSupplier: Supplier): void {
  const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
  if (index !== -1) {
    this.suppliers[index] = updatedSupplier;
  }
}

  
}
