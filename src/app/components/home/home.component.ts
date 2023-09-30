import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  token:any 
  currentUser : any
  isLoggedIn = false
  constructor(private authService : AuthserviceService,private router:Router) { }

  ngOnInit() {
  //  this.isLoggedIn = !!this.authService.getAuthToken()
  //  if (this.isLoggedIn) {
  //    this.currentUser  = this.authService.getUser();
  //    console.log(this.currentUser);
    
  //  }
   
  }

  logout = () => {

    this.authService.logOut()
    this.router.navigate(["/"])
   
  }

  
}
