import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './components/pages/home/home.component';
import { CoursesComponent } from './components/pages/home/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { FormacoesComponent } from './components/pages/home/formacoes/formacoes.component';
import { ExperienciasComponent } from './components/pages/home/experiencias/experiencias.component';
import { AboutComponent } from './components/pages/home/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CoursesComponent,
    FormacoesComponent,
    ExperienciasComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
