import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-freelance',
  templateUrl: './freelance.component.html',
  styleUrls: ['./freelance.component.css']
})
export class FreelanceComponent {
constructor(private route:Router){}
  getQuote(type:string) {
    this.route.navigate(['/freelance/qoute',type])
  }
}
