import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  user: any = []

  errorMessage: boolean = false

  constructor(private service:SharedService, private router: Router) { }

  ngOnInit(){
    this.login()
  }

  login(){
    var loginInfo = this.model
    this.service.seeIfUserExist(loginInfo).subscribe((userFetched) => {this.user = userFetched;   if(userFetched.length === 0){
      this.errorMessage = true
    }
    else{
      this.router.navigate(['/UserAccount'])
    }
  })

  }

}
