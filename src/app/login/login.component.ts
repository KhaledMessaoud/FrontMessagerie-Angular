import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email:string ="";
 password:string ="";

 user:any
 //user:any={"id":0 ,"nom":"","prenom":"","mail":"","password":""};
  constructor(private gest:GestionService , private rout:Router) { }

  ngOnInit(): void {
    this.user=localStorage.getItem("u1");
    if(this.user!=null){
      this.rout.navigate(["recus"]);
    }
  }
verif(){
this.gest.Login(this.email,this.password).subscribe(
{
  next:(data:any)=>{
    console.log(data[0])
    if(data.length>0){
      localStorage.setItem("u1", JSON.stringify(data[0]));
      this.rout.navigate(["recus"])
    }
  },
  error:(err:any)=>{},
  complete:()=>{}
}

)
}
}