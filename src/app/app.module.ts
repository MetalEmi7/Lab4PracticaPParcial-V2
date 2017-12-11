import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //Necesario para doble bindeo
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { HttpModule } from "@angular/http";     //HTTP


import { AppComponent } from './app.component';


import { AltaComponent } from './alta/alta.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BajaComponent } from './baja/baja.component';
import { ErrorComponent } from './error/error.component';
import { ListaComponent } from './lista/lista.component';   

import { UsuarioService } from "./servicios/usuario.service";
import { HttpService } from "./servicios/http.service";
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { ModificarComponent } from './modificar/modificar.component';
import { BorrarUsuarioComponent } from './borrar-usuario/borrar-usuario.component';
//import { ModificarComponent } from './modificar/modificar.component'; //http



const miRoute=[
  {path: "login",component: LoginComponent},  
  {path: "menu",component: MainMenuComponent,
    children:[
      {path: "alta", component: AltaComponent},
      {path: "baja", component: BajaComponent},
      {path: "listado", component: ListaComponent,
        children:[
          {path: "alta", component: AltaComponent}
        ]}
    ]},
  {path: "",component: LoginComponent},
  {path: "**",component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    LoginComponent,
    MainMenuComponent,
    BajaComponent,
    ErrorComponent,
    ListaComponent,
    MostrarUsuarioComponent,
    ModificarComponent,
    BorrarUsuarioComponent,
   // ModificarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRoute),        
    HttpModule                            //HTTP
  ],
  providers: [
    UsuarioService,
    HttpService                           //HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
