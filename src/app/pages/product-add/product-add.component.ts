import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(1000)]],
      price: [null, [Validators.min(0), Validators.required]],
      categoryName: [null, [Validators.required]]
    });
  }

  submit() {
    if(this.form.valid) {
      this.productService.add(this.form.value).subscribe(() => {
        // ce que l'on va faire après que les données ont été sauvegardées
        // message OK
        this.messageService.add({ severity: 'success', summary: 'OK !!!!!' })
        // rediriger vers l'index des produits
        this.router.navigate(['product']);
      })
    }
  }
}
