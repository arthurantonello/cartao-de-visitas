// src/app/services/dados-formulario.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface DadosFormulario {
  dadosPessoais: {
    nome: string;
    idade: number;
    telefone: string;
    email: string;
  };
  endereco: {
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DadosFormularioService {
  private dadosSubject = new BehaviorSubject<DadosFormulario | null>(null);
  dados$ = this.dadosSubject.asObservable();

  setDados(dados: DadosFormulario) {
    this.dadosSubject.next(dados);
  }
}
