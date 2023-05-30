import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-listeenvoyer',
  templateUrl: './listeenvoyer.component.html',
  styleUrls: ['./listeenvoyer.component.css']
})
export class ListeenvoyerComponent implements OnInit {
  user:any={"id":0,"nom":"","prenom":"","email":"","password":""}

  liste:any=[];

  constructor(private gest:GestionService) {
    this.user=localStorage.getItem("u1");
    this.user=JSON.parse(this.user);
   }

  ngOnInit(): void {
    console.log(this.user.id)
    this.getMessageEnvoyes();
  }

  getMessageEnvoyes(){
    this.gest.getMessageEnvoyes(this.user.id).subscribe(
      {
        next: (data:any) => {this.liste=data;
        console.log(data)
      },
      error: (err:any) => {console.log(err)},
      complete: () => { }
      }
    )
  }

}
