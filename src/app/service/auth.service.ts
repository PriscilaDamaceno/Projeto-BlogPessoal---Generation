
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://pridamaceno.herokuapp.com/usuarios/logar', userLogin)
  }
  cadastrar(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://pridamaceno.herokuapp.com/usuarios/cadastrar', user)

  }

}

//https://pridamaceno.herokuapp.com