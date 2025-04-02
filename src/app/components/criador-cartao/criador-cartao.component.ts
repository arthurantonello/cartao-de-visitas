import { Component, OnInit, signal } from '@angular/core';
import { DadosFormularioService, DadosFormulario } from '../../services/dados-formulario.service';
import { CommonModule } from '@angular/common';

import html2canvas from 'html2canvas';  // Para converter elementos HTML em imagens
import jsPDF from 'jspdf'; // Para gerar PDFs a partir das imagens

@Component({
  selector: 'app-criador-cartao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './criador-cartao.component.html',
  styleUrls: ['./criador-cartao.component.css']
})
export class CriadorCartaoComponent implements OnInit {
  dados = signal<DadosFormulario>({
    dadosPessoais: {
      nome: "Seu Nome",
      idade: 25,
      telefone: "(00) 00000-0000",
      email: "seuemail@email.com"
    },
    endereco: {
      endereco: "Endereço Exemplo",
      numero: "123",
      bairro: "Centro",
      cidade: "Cidade Exemplo"
    }
  }); // Com valores fictícios para exemplificar

  constructor(private dadosService: DadosFormularioService) {}

  ngOnInit() {
    this.dadosService.dados$.subscribe(value => {
      if (value) {
        this.dados.set(value);
      }
    });
  }

  downloadPDF() {
    const element = document.getElementById('cartao');
    if (!element) return;

    html2canvas(element, {
      scale: 3, // Melhora a qualidade
      backgroundColor: null,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = canvas.width / 5; // Ajuste para um tamanho real do cartão
      const pdfHeight = canvas.height / 5;

      const pdf = new jsPDF({
        orientation: 'landscape', // Mantém a orientação correta
        unit: 'mm',
        format: [pdfWidth, pdfHeight] // Tamanho exato do cartão
      });

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cartao-de-visitas.pdf');
    });
  }
}
