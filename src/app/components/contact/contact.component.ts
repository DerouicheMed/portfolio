import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  status = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      text: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    //if form is valid send form
    if (this.contactForm.valid) {
      //create a new form data object
      let formData = new FormData();
      //add elements to form data object
      formData.append('name', this.f.name.value);
      formData.append('email', this.f.email.value);
      formData.append('subject', this.f.subject.value);
      formData.append('text', this.f.text.value);

      const data = formData;
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://formspree.io/xaypvqoer');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          //form.reset();
          this.status = 'SUCCESS';
        } else {
          this.status = 'ERROR';
        }
      };
      xhr.send(data);
    }
  }
}
