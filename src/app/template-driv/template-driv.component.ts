import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driv",
  templateUrl: "./template-driv.component.html",
  styleUrls: ["./template-driv.component.scss"]
})
export class TemplateDrivComponent implements OnInit {
  @ViewChild("myForm") myForm: NgForm;
  public defaultSub: string = "advance";

  public Data = {
    email: "",
    subscription: "",
    pwd: ""
  };

  public isSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmitForm(form: NgForm) {
    this.isSubmitted = true;

    this.Data.email = form.form.value.userEmail;
    this.Data.subscription = form.form.value.userSubscription;
    this.Data.pwd = form.form.value.userPwd;

    form.form.reset();
  }
}
