import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, FormComponent],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  onSubmit() {
    // implementar lógica de envio
    console.log('login enviado');
  }
}
