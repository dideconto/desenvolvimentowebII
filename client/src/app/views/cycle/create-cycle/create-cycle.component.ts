import { Component, OnInit } from "@angular/core";
import { BillingCycle } from "src/app/models/BillingCycle";
import { Credit } from 'src/app/models/Credit';
import { CycleService } from 'src/app/services/cycle.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-create-cycle",
  templateUrl: "./create-cycle.component.html",
  styleUrls: ["./create-cycle.component.css"],
})
export class CreateCycleComponent implements OnInit {

  creditColumns : string[] = ["name", "value"];
  credits: Credit[] = [];
  creditsTable: MatTableDataSource<Credit> = 
    new MatTableDataSource<Credit>(this.credits);
  
  cycle: BillingCycle = new BillingCycle();
  credit: Credit = new Credit();

  date: string;
  creditName: string;
  creditValue: number;

  constructor(private service: CycleService) {}

  ngOnInit(): void {
    
  }

  create(): void {
    this.cycle.date = new Date(this.date);
    this.cycle.credits = this.credits;
    this.service.create(this.cycle).subscribe((cycle) => {
      console.log(cycle);
    });
  }

  addCredit(): void{
    this.credit = new Credit();
    this.credit.name = this.creditName;
    this.credit.value = this.creditValue;
    this.credits.push(this.credit);
    this.creditsTable._updateChangeSubscription();
    // this.creditsTable = new MatTableDataSource<Element>(this.credits); 

    this.creditName = "";
    this.creditValue = null;
  }
}

// 1º - Criar um método para o clique do botão - Testar no console
// 2º - Criar um objeto de Créditos - Testar o print do objeto no console
// 3º - Adicionar o objeto dentro do array - Testar o print do array no console
// 4º - Gravar o ciclo de pagamento no banco