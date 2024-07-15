import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  login() {
    if(this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/home'])
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Connection impossible'
        })
      }
    })
  }
}
