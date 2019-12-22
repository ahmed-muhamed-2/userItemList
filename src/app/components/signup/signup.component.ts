import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../service/authentication.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}
  onSubmit(formData) {
    this.authService.createEmail(formData.value).then(res => {
      console.log(res);
    });
  }
}
