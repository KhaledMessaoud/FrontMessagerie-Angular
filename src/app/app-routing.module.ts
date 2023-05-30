import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeenvoyerComponent } from './listeenvoyer/listeenvoyer.component';
import { ListerecusComponent } from './listerecus/listerecus.component';
import { LoginComponent } from './login/login.component';
import { SendComponent } from './send/send.component';

const routes: Routes = [
  {path:"recus" , component:ListerecusComponent},
  {path:"envoyes", component:ListeenvoyerComponent},
  {path:"send", component:SendComponent},
  {path:"login", component:LoginComponent},
  {path:"", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
