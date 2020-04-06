import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"]
})
export class ReactiveFormComponent implements OnInit {
  public genders: string[] = ["male", "female"];
  signUpForm: FormGroup;

  public forbiddenEmails = ["ahuja3594", "ahujaa450", "test"];

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null, [
          Validators.required,
          this.forBiddenUserEmails
        ]),
        pwd: new FormControl(null, [Validators.required])
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  addHobbies() {
    const control = new FormControl(null, Validators.required);

    (<FormArray>this.signUpForm.get("hobbies")).push(control);
  }

  get control() {
    return (<FormArray>this.signUpForm.get("hobbies")).controls;
  }

  forBiddenUserEmails = (control: FormControl): { [key: string]: boolean } => {
    if (this.forbiddenEmails.indexOf(control.value) !== -1) {
      return { forBiddenUserName: true };
    } else {
      return null;
    }
  };
}
