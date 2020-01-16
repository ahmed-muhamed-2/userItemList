import { Component, OnInit } from "@angular/core";
import { moveIn, fallIn, moveInLeft } from "../../router.animations";
import { AuthenticationService } from "../../service/authentication.service";

@Component({
  selector: "app-item-mange",
  templateUrl: "./item-mange.component.html",
  styleUrls: ["./item-mange.component.css"],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { "[@moveIn]": "" }
})
export class ItemMangeComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
