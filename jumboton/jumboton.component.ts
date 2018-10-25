import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jumboton',
  templateUrl: './jumboton.component.html',
  styleUrls: ['./jumboton.component.css']
})
export class JumbotonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {

  }
  goHome() {
    this.router.navigate(['login']); 
  }
  register() {
    this.router.navigate(['register']); 
  }
  compare() {
    this.router.navigate(['compare']); 
  }
  home2() {
    this.router.navigate(['home2']); 
  }
  home3() {
    this.router.navigate(['home3']); 
  }
  search() {
    this.router.navigate(['search']); 
  }
  department() {
    this.router.navigate(['department']); 
  }
}
