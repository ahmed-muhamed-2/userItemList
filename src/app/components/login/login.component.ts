import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/service/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}

  onSubmitLogin(formData) {
    this.authService.login(formData.value).catch(err => console.log(err));
  }
}
