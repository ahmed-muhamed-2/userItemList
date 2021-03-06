import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { environment } from "../environments/environment.prod";

import { AppComponent } from "./app.component";
import { ItemsComponent } from "./components/items/items.component";
import { ItemService } from "./service/item.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ItemFormComponent } from "./components/item-form/item-form.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AppRoteingModule } from "./app.routes";
import { ItemMangeComponent } from "./components/item-mange/item-mange.component";
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    ItemFormComponent,
    LoginComponent,
    SignupComponent,
    ItemMangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, "itemManagment"),
    AngularFirestoreModule,
    AppRoteingModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    ItemService,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireAuth,
    AngularFireAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
