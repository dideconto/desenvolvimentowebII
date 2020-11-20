import { BillingCycle } from "./../models/BillingCycle";
import { Dashboard } from "./../models/Dashboard";
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CycleService {
  baseURL = "http://localhost:1234";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  list(): Observable<BillingCycle[]> {
    return this.http.get<BillingCycle[]>(this.baseURL);
  }
  create(cycle: BillingCycle): Observable<BillingCycle> {
    return this.http.post<BillingCycle>(this.baseURL, cycle);
  }
  getById(id: string): Observable<BillingCycle> {
    return this.http.get<BillingCycle>(`${this.baseURL}/${id}`);
  }
  update(cycle: BillingCycle): Observable<BillingCycle> {
    return this.http.put<BillingCycle>(this.baseURL, cycle);
  }
  delete(id: string): Observable<BillingCycle[]> {
    return this.http.delete<BillingCycle[]>(`${this.baseURL}/${id}`);
  }
  getByMonthYear(year: number, month: number): Observable<BillingCycle> {
    return this.http.get<BillingCycle>(`${this.baseURL}/${year}/${month}`);
  }
  dashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${this.baseURL}/dashboard`);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
