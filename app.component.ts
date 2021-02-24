import { Component, OnInit, ViewChildren } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  @ViewChildren('productList')
  productList: ProductListComponent;

  ngOnInit() : void {
      this.productList.products = this.backendService.getProducts();
  }
}
