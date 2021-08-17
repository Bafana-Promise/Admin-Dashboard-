import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  selectedLink = "";
  sidenavItems = [
    { icon: "build", name: "Dashboard", link: "dashboard", show: true },
    { icon: "groups", name: "User Managment",icon1: "chevron_left", link: "/manage", show: true },
    { icon: "settings", name: "Countries", link: "/country", show: true },
    { icon: "visibility_off", name: "Customers", link: "/customer", show: true },
    { icon: "settings", name: "Room", link: "/room", show: true },
    { icon: "notifications", name: "Booking", link: "/booking", show: true },
    { icon: "open_with", name: "Find room", link: "/findRoom", show: true },
    { icon: "vpn_key", name: "Change password", link: "/password", show: true },
    { icon: "keyboard_backspace", name: "Logout", link: "/logout", show: true }
];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  selectItem() {
    console.log(this.router.url);
    if (this.router.url.includes('/dashboard/')) {
        this.selectedLink = '/dashboard';
    } else {
        this.selectedLink = this.router.url;
    }
}

}
