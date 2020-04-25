import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { TeoriasComponent } from './teorias/teorias.component';
import { NetflixComponent } from './netflix/netflix.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'contatos', component:ContatosComponent},
  { path: 'teorias', component:TeoriasComponent},
  { path: 'netflix', component:NetflixComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
