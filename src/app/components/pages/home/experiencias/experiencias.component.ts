import { Component } from '@angular/core';

import { HomeService } from '../home.service';
import { Experience } from 'src/app/model/Experience';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent {
  experience: Experience | any;
  isLoading = true;


  constructor(private homeService: HomeService) {

  }


  ngOnInit() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    this.homeService.getExperiences().subscribe(
      (data: Experience) => {
        this.experience = data;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Erro ao obter dados da API:', error);
        this.isLoading = false;
      }
    );

  }


}
