import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  form : FormGroup
  expense:any;
  date:any;
  validationErrors: any;
  genericError: string | null = null;

  constructor(
    private authService: AuthserviceService,
    private serviceService: ServiceService,
    private router: Router
  ) {
    let expense = new FormControl('');
    let date = new FormControl('');
    this.form =  new FormGroup({
      expense,
      date,
    })
  }

  ngOnInit() {
    this.form =  new FormGroup({
      expense:  new FormControl('',[Validators.required]),
      date:  new FormControl('',[Validators.required])
    })
  }
  addExpense = () => {
    this.serviceService.addExpense(this.form.value.expense,this.form.value.date).subscribe(
      (response) => {
        
        console.log(response);
        // Successful response handling
        console.log('Expense added successfully:', response);
        this.router.navigate(['/detail-expense']).then(() => {
          // Use window.location to reload the page
          window.location.reload();
        });
      },
      (error) => {
        if (error.status === 422) {
          // Handle validation errors
          const validationErrors = error.error;
          console.error('Validation errors:', validationErrors);
          // Display validation errors to the user
          this.validationErrors = validationErrors; // Bind to a property for display in the template
        } else {
          // Handle other errors (e.g., network issues)
          console.error('Error:', error);
          // Display a generic error message to the user
          this.genericError = 'An error occurred while adding the expense.';
        }
      }
    );
  }

  detailIncome() {
    // Use the router to navigate to the 'add-expenses' route
    // console.log('Button clicked')
    this.router.navigate(['/detail-income']);
  }
  
  detailExpense() {
    // Use the router to navigate to the 'add-expenses' route
    // console.log('Button clicked')
    this.router.navigate(['/detail-expense']);
  }
  logout = () => {
    this.authService.logOut();
    this.router.navigate(['/']);
  };
}
