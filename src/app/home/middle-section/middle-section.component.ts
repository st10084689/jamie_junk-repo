import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.css']
})
export class MiddleSectionComponent {

  constructor(private http: HttpClient) { }

  downloadPdf(){
  const pdfUrl = './assets/Cv.pdf';

  this.http.get(pdfUrl, {responseType: 'blob'}).subscribe((res:any)=>
  {
    const blob = new Blob([res], { type: 'appication/pdf'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'JamieTheoJunkCV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  })
  }
}
