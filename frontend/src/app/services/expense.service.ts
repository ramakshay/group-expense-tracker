import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Expense {
  _id?: string;
  name: string;
  amount: number;
  date: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private API_URL = 'http://localhost:5000/expense';

  constructor(private httpClient: HttpClient) { }

  getExpenses() : Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(this.API_URL);
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(this.API_URL, expense);
  }
}
