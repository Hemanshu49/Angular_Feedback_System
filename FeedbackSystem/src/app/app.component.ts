import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      emailField: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      feedbackField: new FormControl('', [
        Validators.required,
        Validators.minLength(25),
        Validators.maxLength(3000)
      ])
    });
  }

  getErrorMessage(control: AbstractControl): string {
    if (!control || control.valid) {
      return '';
    }
    // if (control.hasError('required')) {
    //   return 'Cannot be empty';
    // }
    if (control.hasError('email')) {
      return 'Must be a valid email';
    }
    if (control.hasError('minlength')) {
      const limit = control.getError('minlength').requiredLength;
      return `Must be at least ${limit} characters`;
    }
    if (control.hasError('maxlength')) {
      const limit = control.getError('maxlength').requiredLength;
      return `Must be no more than ${limit} characters`;
    }

    return 'Required Field';
  }

  onSubmit() {
    this.formGroup.reset();
    alert("Feedback Submitted")
  }

  get emailField(): FormGroup{
    return this.formGroup.get('emailField') as FormGroup;
  }

  get feedbackField()  {
    return this.formGroup.get('feedbackField') as FormGroup;
  }
}