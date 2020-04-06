import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormdataService } from "../services/formdata.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})
export class ShippingComponent implements OnInit {
  countryList = ["India", "America", "Russia"];
  defaultCountry: string = "America";
  defaultState: string = "haryana";

  @ViewChild("shippingForm") form: NgForm;

  constructor(
    private formDataService: FormdataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    if (this.form.form.valid) {
      this.formDataService.sendData("shippingData", data.form.value);
      this.formDataService.shippingDataValid = true;

      this.router.navigate(["step-3"]);
    }
  }
}
