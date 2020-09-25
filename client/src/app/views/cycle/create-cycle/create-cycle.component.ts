import { Component, OnInit } from "@angular/core";
import { BillingCycle } from "src/app/models/BillingCycle";
import { CycleService } from 'src/app/services/cycle.service';

@Component({
  selector: "app-create-cycle",
  templateUrl: "./create-cycle.component.html",
  styleUrls: ["./create-cycle.component.css"],
})
export class CreateCycleComponent implements OnInit {
  
  cycle: BillingCycle = {
    date : new Date(),
    credits: [
      {
        name: "Teste Fake",
        value: 1000
      }
    ],
    debits:[
      {
        name: "Conta de luz",
        value: 300,
        status: "PAGO"
      }
    ]
  };

  constructor(private service: CycleService) {}

  ngOnInit(): void {
    
  }

  create(): void {
    // console.log(this.cycle.date);
    this.service.create(this.cycle).subscribe((cycle) => {
      console.log(cycle);
    });
  }
}
