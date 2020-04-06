import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TemplateDrivComponent } from "./template-driv/template-driv.component";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { PaymentComponent } from "./payment/payment.component";
import { ShowDataComponent } from "./show-data/show-data.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveAssignmentComponent } from './reactive-assignment/reactive-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivComponent,
    PersonalInformationComponent,
    ShippingComponent,
    PaymentComponent,
    ShowDataComponent,
    ReactiveFormComponent,
    ReactiveAssignmentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
