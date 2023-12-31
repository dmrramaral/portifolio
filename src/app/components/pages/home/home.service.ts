import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/model/APIResponse';
import { CourseProgress } from 'src/app/model/CoursesProgress';
import { Experience } from 'src/app/model/Experience';
import { Guide } from 'src/app/model/Guide';
import { FormacaoAcademica } from '../../../model/FormacaoAcademica';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  private apiJsonExperiencia = '/assets/js/experiencia.json';
  private apiJsonFormacoes = '/assets/js/formacoes.json';
  private apiJsonCursos = '/assets/js/courses.json';




  constructor(private httpClient : HttpClient) { }

  getApiData(): Observable<APIResponse>{
    return this.httpClient.get<APIResponse>(this.apiJsonCursos);
  }


  // Método para associar os cursos a cada guia
  associateCoursesToGuides(guides: Guide[], courseProgresses: CourseProgress[]): Guide[] {
    return guides.map((guide) => {
      guide.courses = courseProgresses.filter((course) => course.id === guide.id);
      return guide;
    });
  }

  // Metodo para obter experiencias
  getExperiences(): Observable<Experience> {
    return this.httpClient.get<Experience>(this.apiJsonExperiencia);
  }

  // Metodo para obter formacoes
  getFormations(): Observable<FormacaoAcademica> {
    return this.httpClient.get<FormacaoAcademica>(this.apiJsonFormacoes);
  }
}
