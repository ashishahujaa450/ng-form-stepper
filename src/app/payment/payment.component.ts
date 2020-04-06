import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormdataService } from "../services/formdata.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  @ViewChild("paymentForm") form: NgForm;
  defaultCard: string = "rupay";

  constructor(
    private formDataService: FormdataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    //check if data is valid
    if (this.form.form.valid) {
      this.formDataService.sendData("paymentData", data.form.value);
      this.formDataService.perosnalDataValid = true;

      this.router.navigate(["show-data"]);
    }
  }
}
