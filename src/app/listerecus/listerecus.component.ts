import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-listerecus',
  templateUrl: './listerecus.component.html',
  styleUrls: ['./listerecus.component.css']
})
export class ListerecusComponent implements OnInit {
  user:any={"id":0,"nom":"","prenom":"","email":"","password":""}

  liste:any=[];

  constructor(private gest:GestionService) { 
    this.user=localStorage.getItem("u1");
    this.user=JSON.parse(this.user);
  }

  ngOnInit(): void {
    console.log(this.user.id)
    this.getMessagesRecus();
  }

  getMessagesRecus(){
    this.gest.getMessageRecus(this.user.id).subscribe(
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
