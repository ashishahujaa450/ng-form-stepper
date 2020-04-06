import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { PaymentComponent } from "./payment/payment.component";
import { CanActivateGuard } from "./shipping/can-activate.guard";
import { ShowDataComponent } from "./show-data/show-data.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveAssignmentComponent } from "./reactive-assignment/reactive-assignment.component";

const routes: Routes = [
  { path: "step-1", component: PersonalInformationComponent },
  { path: "", redirectTo: "step-1", pathMatch: "full" },
  {
    path: "step-2",
    component: ShippingComponent,
    canActivate: [CanActivateGuard]
  },
  { path: "step-3", component: PaymentComponent },
  { path: "show-data", component: ShowDataComponent },
  { path: "reactive", component: ReactiveFormComponent },
  { path: "reactive-assignment", component: ReactiveAssignmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
