import { AfterViewInit, Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements AfterViewInit{

  product = signal<any[]>([]);

  constructor(private productService: ProductService) {
    this.loadData();
  }
  ngAfterViewInit(): void {
    console.log(this)
  }



  delete(id: number) {
    this.productService.remove(id).subscribe(() => {
      this.loadData()
    })
  }

  loadData() {
    this.productService.getAll()
      .subscribe(data => this.product.set(data))
  }
}
