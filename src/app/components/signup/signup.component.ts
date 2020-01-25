import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../service/authentication.service";
import { moveIn, fallIn } from "../../router.animations";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  animations: [moveIn(), fallIn()],
  host: { "[@moveIn]": "" }
})
export class SignupComponent implements OnInit {
  formSingup: FormGroup;
  private _error = new BehaviorSubject<string>("");
  public error$ = this._error.asObservable();
  constructor(public authService: AuthenticationService, private rot: Router) {}

  ngOnInit() {
    this.formSingup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }
  onSubmit() {
    this.authService
      .createEmail(this.formSingup.value)
      .then(res => {
        this.rot.navigate(["/item-mange"]);
      })
      .catch(err => this._error.next(err.message));
  }
}
