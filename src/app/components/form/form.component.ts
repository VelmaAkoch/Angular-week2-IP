import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Repository } from 'src/app/repository';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isUser: boolean = false;
  isForm: boolean = true;
  user: String = "";
  public_repos!: String;


  apiKey: String = "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v";

  repository: Repository;


  repoData :any = []; 
  newUserData :any = []; 
  repoDetails= []
  userData = {
    name: "",
    avatar_url: "",
    created_at: "",
    updated_at: ""

  }

 onSubmit(f: NgForm){
  this.repoData.length = 0;

  interface usersResponse{
    avatar_url: string;
    login: string;
    name: string;
    public_repos: string;
    created_at: string;
    updated_at: string;
  }
  this.http.get<usersResponse>('https://api.github.com/users/' +this.user    
    ).toPromise().then(response=>{
      console.log(response)
     this.user= response!.avatar_url
     this.user= response!.login
     this.user= response!.name 
     this.public_repos= response!.public_repos
     this.userData.name= response!.name
     this.userData.avatar_url= response!.avatar_url 
     this.userData.created_at= response!.created_at
     this.userData.updated_at= response!.updated_at

    })
    this.http.get<any>("https://api.github.com/users/" + this.user + "/repos").toPromise().then(response=>{
  
      console.log(response)
      for(var i=0; i<response.length; i++)
      {
        
        this.newUserData = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
        this.repoData.push(this.newUserData);
      }

    })
 

  this.isForm= false;
  this.isUser= true;
 }

 constructor(private http: HttpClient) {
  this.repository = new Repository("","","",new Date(),"","","",new Date()); 
 }

  ngOnInit() {
  this.repoDetails= this.repoData

}

}

