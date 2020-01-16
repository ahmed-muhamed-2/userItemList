import { Component, OnInit, HostBinding } from "@angular/core";
import { AuthenticationService } from "src/app/service/authentication.service";
import { moveIn } from "../../router.animations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  animations: [moveIn()],
  host: { "[@moveIn]": "" }
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}

  onSubmitLogin(formData) {
    this.authService.login(formData.value).catch(err => console.log(err));
  }
}
