import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../domain/product';

@Component({
    selector: 'table-filter-sort-edit-demo',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableFilterSortEditDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    onEdit(event:  Event): void {
        if (!this.isPositiveInteger(event.target?.addEventListener)) {
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
