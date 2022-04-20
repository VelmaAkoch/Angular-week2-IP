import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isUser: boolean = false;
  isForm: boolean = true;
  user: String = "";
  // public_repos!: String;


  // apiKey: String = "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v";



  // repoData :any = []; 
  // newUserData :any = []; 
  // repoDetails= []
  // userData = {
  //   name: "",
  //   avatar_url: "",
  //   created_at: "",
  //   updated_at: ""

  // }

 onSubmit(f: NgForm){

 }

  constructor() { }

  ngOnInit(): void {
  }

}
