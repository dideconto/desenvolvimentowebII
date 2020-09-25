import { BillingCycle } from './../../../models/BillingCycle';
import { CycleService } from './../../../services/cycle.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-list-cycle",
  templateUrl: "./list-cycle.component.html",
  styleUrls: ["./list-cycle.component.css"],
})
export class ListCycleComponent implements OnInit {
  
  cycles: BillingCycle[] = [];

  constructor(private router: Router, private cycleService: CycleService) {}
  
  ngOnInit(): void {
    this.cycleService.list().subscribe((lista) => {
      console.log(lista);
      this.cycles = lista;
    });
  }

  navigateToCreateCycle(): void {
    this.router.navigate(['cycle/create']);
  }

}
