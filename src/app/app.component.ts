import { PessoaService } from './services/pessoa.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cliente';

  constructor(private service: PessoaService) {

  }
}
