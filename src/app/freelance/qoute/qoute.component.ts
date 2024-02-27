import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})

export class QouteComponent {

  name:string='';

    quoteForm: FormGroup;
  
    constructor(private http: HttpClient, private formBuilder: FormBuilder) { 
      this.quoteForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        coreFeatures: ['', Validators.required],
        description: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.quoteForm.valid) {
        const emailData = this.quoteForm.value;
  
        this.http.post('https://jamie-repo.azurewebsites.net/send-email', emailData)
          .subscribe(
            (response) => {
              console.log('Email sent successfully!', response);
              this.resetForm();
            },
            (error) => {
              console.error('Error sending email:', error);
            }
          );
      } else {
        console.log('Form is invalid');
      }
    }
  
    resetForm() {
      this.quoteForm.reset();
    }
  }