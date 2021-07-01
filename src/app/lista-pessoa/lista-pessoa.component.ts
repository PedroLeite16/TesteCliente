import { PessoaService } from '../services/pessoa.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../models/pessoa.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.scss']
})

export class ListaPessoaComponent implements OnInit {

  pessoas: any[];
  displayedColumns: string[];

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {

    this.displayedColumns = ['nome', 'endereco', 'telefone', 'acao'];

    this.service.getAll().subscribe((pessoas: Pessoa[]) => {
      console.table(pessoas);
      this.pessoas = pessoas;
    });
  }

  deletar(id) {

    this.service.delete(id).subscribe((resposta) => {
      alert("Pessoa removida com sucesso!");
      window.location.reload();
    });

  }

}
