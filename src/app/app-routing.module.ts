import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'Usuarios', component: UsuariosComponent},
  {path: 'NuevoUsuario', component:PostComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
