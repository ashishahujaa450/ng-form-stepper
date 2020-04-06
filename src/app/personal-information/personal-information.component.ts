import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormdataService } from "../services/formdata.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-personal-information",
  templateUrl: "./personal-information.component.html",
  styleUrls: ["./personal-information.component.scss"]
})
export class PersonalInformationComponent implements OnInit {
  @ViewChild("personalInfo") form: NgForm;

  defaultSubscription: string = "advance";
  personalFormIsValid: boolean = false;
  requiredAge: number = 18;

  constructor(
    private formDataService: FormdataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    //check if data is valid
    if (this.form.form.valid) {
      this.formDataService.sendData("personalData", data.form.value);
      this.formDataService.perosnalDataValid = true;

      this.router.navigate(["step-2"]);
    }
  }
}
