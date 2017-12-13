import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// component based router
import { Router } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // create an instance of activatedRoute which we have to do by dependency injection
  //which generally happens in constructor.
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate([''])
  }

}
