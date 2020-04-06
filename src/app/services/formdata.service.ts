import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FormdataService {
  perosnalDataValid: boolean = false;
  shippingDataValid: boolean = false;

  private formData = {
    personalData: "",
    shippingData: "",
    paymentData: ""
  };

  constructor() {}

  sendData(keyname: string, value) {
    this.formData[keyname] = value;
  }

  get getFullForm() {
    return this.formData;
  }
}
