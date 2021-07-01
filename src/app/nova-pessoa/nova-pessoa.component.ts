import { Pessoa } from './../models/pessoa.models';
import { PessoaService } from './../services/pessoa.service';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-pessoa',
    templateUrl: './nova-pessoa.component.html',
    styleUrls: ['./nova-pessoa.component.scss']
})

export class NovaPessoaComponent {

  nome: string;
  endereco: string;
  telefone: string;

  constructor(private service: PessoaService, private router: Router) {

  }

  adicionar() {
    const valorCadastrar: Pessoa = {nome: this.nome ,endereco: this.endereco, telefone: this.telefone};

    this.service.create(valorCadastrar).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('lista');
    },
    (error) => console.error(error));

  }

  limparCampos() {
    this.nome = "";
    this.endereco = "";
    this.telefone = "";
  }
}
