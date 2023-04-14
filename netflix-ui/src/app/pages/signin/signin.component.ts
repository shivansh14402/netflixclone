import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"

import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.imgClickHandler = () => {
      router.navigate([""], {relativeTo: activatedRoute})
    }
  }


  lableStyle="";
  inputStyle=""

  inputFocusHandler(){
    this.lableStyle = "font-size:12px; transition: 0.25s"
    this.inputStyle = "height:1rem; display:inherit"
    console.log("Cfe")
  }

  imgClickHandler(){}

  signupForm : FormGroup = new FormGroup({
    'emailOrPhone': new FormControl(''),
    'password': new FormControl('')
  })

  ngOnInit() {

    this.signupForm.valueChanges.subscribe(
      (values) => {

      }
    )
  }

}