import { Pessoa } from './../models/pessoa.models';
import { PessoaService } from './../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.scss']
})
export class EditarPessoaComponent implements OnInit {

  id: string;
  nome: string;
  endereco: string;
  telefone: string;

  constructor(private service: PessoaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;

    this.service.getPessoa(this.id).subscribe((resposta) => {

      this.nome = resposta[0].nome;
      this.endereco = resposta[0].endereco;
      this.telefone = resposta[0].telefone;
    });

  }

  editar() {

    const pessoa: Pessoa = {
      nome: this.nome,
      endereco: this.endereco,
      telefone: this.telefone
    }

    this.service.update(this.id, pessoa).subscribe((resposta) => {
      alert("Pessoa editada com sucesso!");
      this.router.navigateByUrl('lista');
    })
  }

}
