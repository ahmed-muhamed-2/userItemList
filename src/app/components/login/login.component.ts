import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { AuthenticationService } from "src/app/service/authentication.service";
import { moveIn, fallIn } from "../../router.animations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  animations: [moveIn(), fallIn()],
  host: { "[@moveIn]": "" }
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthenticationService, private rot: Router) {}

  private _error = new BehaviorSubject<string>("");
  public error$ = this._error.asObservable();

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  onSubmitLogin() {
    this.authService
      .login(this.form.value)
      .then(res => {
        this.rot.navigate(["/item-mange"]);
      })
      .catch(err => {
        this._error.next(err.message);
      });
  }
}
