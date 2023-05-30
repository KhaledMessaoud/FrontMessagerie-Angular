import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get("http://localhost:8080/users");
  }

  getMessageEnvoyes(id:number){
    return this.http.get("http://localhost:8080/messagessend/"+id);
  }

  getUsersById(id:number){
    return this.http.get("http://localhost:8080/user/"+id);
  }

  verifUser(email:string, pass:string){
    return this.http.get("http://localhost:8080/")
  }

  getMessageRecus(id:number){
    return this.http.get("http://localhost:8080/messagesrecus/"+id);
  }

  Login(email:string,password:string){
    return this.http.get("http://localhost:8080/verif/"+email+"/"+password);
  }

  sendMessage(message: any){
    return this.http.post("http://localhost:8080/sendMessage",message);
  }
}
