import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  error: any;
  constructor(public afAuth: AngularFireAuth, private rot: Router) {}

  createEmail(formData) {
    // console.log(formData.email);
    return this.afAuth.auth
      .createUserWithEmailAndPassword(formData.email, formData.password);
  }

  login(formData) {
    // console.log(formData.email);
    return this.afAuth.auth.signInWithEmailAndPassword(
      formData.email,
      formData.password
    );
  }

  logout() {
    return this.afAuth.auth.signOut().then(res => {
      this.rot.navigate(["/login"]);
      this.loggedIn.next(false);
    });
  }
}
