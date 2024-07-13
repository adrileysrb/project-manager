import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../domain/product';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'table-filter-sort-edit-demo',
    templateUrl: 'table.component.html',
    standalone: true,
    imports: [TableModule, InputTextModule, CommonModule, FormsModule],
    providers: [ProductService],
    styles: [
        `:host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }`
    ],
})
export class TableFilterSortEditDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    onEdit(event: InputEvent) {
        if (!this.isPositiveInteger((event!.target! as Event).value)) {
            event.stopPropagation();
        }
    }

    isPositiveInteger(val: any) {
        let str = String(val);

        str = str.trim();

        if (!str) {
            return false;
        }

        str = str.replace(/^0+/, '') || '0';
        var n = Math.floor(Number(str));

        return n !== Infinity && String(n) === str && n >= 0;
    }
}
