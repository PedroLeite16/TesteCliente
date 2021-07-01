import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { NovaPessoaComponent } from './nova-pessoa/nova-pessoa.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaPessoaComponent  },
  { path: 'nova-pessoa', component: NovaPessoaComponent  },
  { path: 'editar-pessoa/:id', component: EditarPessoaComponent  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
