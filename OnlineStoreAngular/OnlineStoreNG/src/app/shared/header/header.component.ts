import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) { }

  userInfo: any = []

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('user'))
    console.log(this.userInfo)
  }

  logout(){
    localStorage.removeItem('user')
    this.userInfo.length = 0
  }

}
