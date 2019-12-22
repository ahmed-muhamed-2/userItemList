import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../service/authentication.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  name: any;
  isLoggedIn$: Observable<boolean>;
  constructor(
    public authService: AuthenticationService,
    private angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    // this.name = this.angularFireAuth.auth.currentUser;
    this.isLoggedIn$ = this.authService.loggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
