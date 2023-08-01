import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { APIResponse } from 'src/app/model/APIResponse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  apiResponse: APIResponse | undefined;
  isLoading = true;

  constructor(private homeService: HomeService) {


  }

  ngOnInit() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    this.homeService.getApiData().subscribe(
      (data: APIResponse) => {
        this.apiResponse = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao obter dados da API:', error);
        this.isLoading = false;
      }
    );

  }

}
