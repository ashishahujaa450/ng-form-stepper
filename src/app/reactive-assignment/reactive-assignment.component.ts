import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { reject } from "q";

@Component({
  selector: "app-reactive-assignment",
  templateUrl: "./reactive-assignment.component.html",
  styleUrls: ["./reactive-assignment.component.scss"]
})
export class ReactiveAssignmentComponent implements OnInit {
  public projectForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.asyncProjectForBiddenName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl("stable")
    });
  }

  private projectForBiddenName = (
    control: FormControl
  ): { [key: string]: boolean } => {
    if (control.value === "test") {
      return { projectForbidden: true };
    } else {
      return null;
    }
  };

  private asyncProjectForBiddenName = (
    control: FormControl
  ): Observable<any> | Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test") {
          resolve({ projectForbidden: true });
          return;
        } else {
          resolve(null);
        }
      }, 2000);
    });
  };

  public onSubmit() {
    console.log(this.projectForm);
  }
}
