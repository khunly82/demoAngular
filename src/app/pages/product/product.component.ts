import { AfterViewInit, Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements AfterViewInit{

  product = signal<any[]>([]);

  constructor(public authService: AuthService, private productService: ProductService, private messageService: MessageService) {
    this.loadData();
  }

  ngAfterViewInit(): void {
    console.log(this)
  }



  delete(id: number) {
    this.productService.remove(id).subscribe({ 
      // en cas de success
      next: () => {
        this.loadData()
      } , 
      // en cas d'erreur
      error: err => {
        this.messageService.add({ 
          severity: 'error', 
          summary: err.error.statusCode === 401 ? 'Interdit !!' : 'Une erreur est survenue'  
        })
      } 
    })
  }

  loadData() {
    this.productService.getAll()
      .subscribe(data => this.product.set(data))
  }
}
