import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = [
    {icon: "bar_chart",arrowicon: "arrow_upward", header:"Today Views", amount:"22,520", backGround: "bgColorBlue"},
    {icon: "attach_money",arrowicon: "arrow_upward", header:"Earnings", amount:"22,520", backGround: "bgColorGreen"},
    {icon: "badge",arrowicon: "arrow_upward", header:"Users", amount:"22,520", backGround: "bgColorPurple"},
    {icon: "drafts",arrowicon: "arrow_upward", header:"Enquiry", amount:"22,520", backGround: "bgColorMaroon"},
    {icon: "bar_chart",arrowicon: "arrow_upward", header:"Today Views", amount:"22,520", backGround: "bgColorBlue"}
  ]

  users = [
    { country:"Austrailer", client:"Felix", changes:"2.43%", budget:"$123", status:"Active", states:"California"},
    { country:"Cuba", client:"Beavis", changes:"1.3%", budget:"$1452", status:"Static", states:"Florider"},
    { country:"France", client:"Peter", changes:"-8 45%", budget:"$543", status:"Good", states:"New Jersey"},
    { country:"South Africa", client:"TeeyKay", changes:"7.43%", budget:"$867", status:"Very Good", states:"Johannesburg"},
    { country:"Itally", client:"Alphie", changes:"5.6%", budget:"$809", status:"Active", states:"Alex"},
    { country:"Zambia", client:"Siya", changes:"9.43%", budget:"$678", status:"Static", states:"Chicago"},
    { country:"Congo", client:"Promise", changes:"1.34%", budget:"$565", status:"Good", states:"George"}
]
  
  constructor() { }

  ngOnInit(): void {
  }

}
