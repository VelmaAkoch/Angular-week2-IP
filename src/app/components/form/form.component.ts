import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isUser: boolean = false;
  isForm: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
