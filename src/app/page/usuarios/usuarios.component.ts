import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: any = []

  constructor(private UsuariosServicio: UsuariosService) { }

  ngOnInit(): void {

    this.UsuariosServicio.cargarUsuarios()
      .subscribe( respuesta => {
        console.log(respuesta);
        this.usuarios = respuesta.data;
      });
  }

}
