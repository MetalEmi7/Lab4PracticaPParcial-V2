import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //Necesario para doble bindeo

import { RouterModule, Routes, RouterLinkActive } from "@angular/router";

import { AppComponent } from './app.component';

import { AltaComponent } from './alta/alta.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BajaComponent } from './baja/baja.component';

import { ErrorComponent } from './error/error.component';

import { PersonaService } from "./servicios/persona.service";

const miRoute=[
  {path: "login",component:LoginComponent},  
  {path: "menu",component:MainMenuComponent,
    children:[
      {path: "baja", component: BajaComponent},
      {path: "alta",component:AltaComponent}
    ]},
  {path: "",component:LoginComponent},
  {path: "**",component:ErrorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    LoginComponent,
    MainMenuComponent,
    BajaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRoute)
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
