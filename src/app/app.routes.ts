import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo
} from "@angular/fire/auth-guard";

import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ItemMangeComponent } from "./components/item-mange/item-mange.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);

export const routs: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "item-mange",
    component: ItemMangeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoteingModule {}
