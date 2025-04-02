import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadosFormularioService } from '../../services/dados-formulario.service';
import { CriadorCartaoComponent } from '../criador-cartao/criador-cartao.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CriadorCartaoComponent], // Importando o componente do cartão
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dadosService: DadosFormularioService
  ) {
    this.formulario = this.fb.group({
      dadosPessoais: this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        idade: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
        telefone: ['', [
          Validators.required,
          Validators.pattern(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/) // Para garantir que o número seja composto apenas por dígitos.
        ]],
        email: ['', [Validators.required, Validators.email]]
      }),
      endereco: this.fb.group({
        endereco: ['', Validators.required],
        numero: ['', [
          Validators.required,
          Validators.pattern(/^[0-9]+$/) // Considera formatos comuns de telefone
        ]],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.dadosService.setDados(this.formulario.value);
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
