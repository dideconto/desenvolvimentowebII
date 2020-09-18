import { BillingCycle } from "./../models/BillingCycle";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CycleService {
  
  constructor(private http: HttpClient) {}

  list(): Observable<BillingCycle[]> {
    return this.http.get<BillingCycle[]>('http://localhost:1234');
  }
}
