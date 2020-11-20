import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { CycleService } from "src/app/services/cycle.service";

@Component({
  selector: "app-dashboard-cycle",
  templateUrl: "./dashboard-cycle.component.html",
  styleUrls: ["./dashboard-cycle.component.css"],
})
export class DashboardCycleComponent {
  
  credits: number;
  debits: number;

  constructor(private service: CycleService) {}

  ngOnInit(): void {
    this.service.dashboard().subscribe((dashboard) => {
      console.log(dashboard);
      this.credits = dashboard.totalCredits;
      this.debits = dashboard.totalDebits;
    })
  }
}
