import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseInterface } from '../models/interface-Response';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { 
    console.log('Servicio de usuario Trabajando')
  }

  cargarUsuarios(){
    const url =  'https://reqres.in/api/users' //'https://my-json-server.typicode.com/Terhesita/ClienteJson' ; 

    return this.http.get<ResponseInterface>( url );
  }
}
