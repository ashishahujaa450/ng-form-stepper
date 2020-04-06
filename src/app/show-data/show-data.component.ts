import { Component, OnInit } from "@angular/core";
import { FormdataService } from "../services/formdata.service";

@Component({
  selector: "app-show-data",
  templateUrl: "./show-data.component.html",
  styleUrls: ["./show-data.component.scss"]
})
export class ShowDataComponent implements OnInit {
  public data: any;

  constructor(private formDataService: FormdataService) {}

  ngOnInit(): void {
    this.data = this.formDataService.getFullForm;
  }
}
