import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { FormdataService } from "../services/formdata.service";

@Injectable({
  providedIn: "root"
})
export class CanActivateGuard implements CanActivate {
  constructor(private formService: FormdataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const personalData = this.formService.getFullForm.personalData;

    if (personalData !== "" && this.formService.perosnalDataValid) {
      return true;
    } else {
      // this.router.navigate(["step-1"]);
      return true;
    }
  }
}
