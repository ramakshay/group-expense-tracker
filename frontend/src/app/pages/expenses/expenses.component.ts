import { Component, OnInit } from '@angular/core';
import { Expense, ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses',
  imports: [CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {};

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe( data => {
      this.expenses = data;
    })
  }


}
