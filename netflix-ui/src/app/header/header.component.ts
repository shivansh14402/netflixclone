import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  loginNavigator(){};
  homeNavigator(){};

  constructor(private router: Router, private activatedRoute : ActivatedRoute){

    this.loginNavigator = () => {
      router.navigate(['login'], {relativeTo: activatedRoute})
    }

    this.homeNavigator = () => {
      router.navigate([''], {relativeTo: activatedRoute})
    }
  }

}
