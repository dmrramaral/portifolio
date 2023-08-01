import { Component } from '@angular/core';
import { FormacaoAcademica } from 'src/app/model/FormacaoAcademica';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-formacoes',
  templateUrl: './formacoes.component.html',
  styleUrls: ['./formacoes.component.scss']
})
export class FormacoesComponent {
  formacoes : FormacaoAcademica| any;

  isLoading = true;


  constructor(private homeService: HomeService) {

  }


  ngOnInit() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    this.homeService.getFormations().subscribe(
      (data: FormacaoAcademica) => {
        this.formacoes = data;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Erro ao obter dados da API:', error);
        this.isLoading = false;
      }
    );

    }
}
