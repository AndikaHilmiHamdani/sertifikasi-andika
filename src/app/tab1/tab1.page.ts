import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  form : FormGroup
  email:any;
  password:any;

  constructor(
    private authService : AuthserviceService,
    private router:Router
  ) {
    let email = new FormControl('');
    let password = new FormControl('');
    this.form =  new FormGroup({
      email,
      password,
    })
  }


  ngOnInit(): void {
      this.form =  new FormGroup({
        email:  new FormControl('',[Validators.required]),
        password:  new FormControl('',[Validators.required])
      })
      
      
  }

  onLogin() {
    console.log("coba");

    this.authService.login(this.form.value).subscribe({
      next:(response: any) => {
        console.log(response.access_token);

        // this.form.reset();
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('name', response.name);
        this.authService.setAuthToken(response.token);
        this.router.navigateByUrl('/home-page');
      }
    }
    );
  }

}
