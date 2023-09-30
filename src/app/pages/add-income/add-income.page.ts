import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {

  form : FormGroup
  income:any;
  date:any;
  validationErrors: any;
  genericError: string | null = null;

  constructor(
    private authService: AuthserviceService,
    private serviceService: ServiceService,
    private router: Router
  ) {
    let income = new FormControl('');
    let date = new FormControl('');
    this.form =  new FormGroup({
      income,
      date,
    })
  }

  ngOnInit() {
    this.form =  new FormGroup({
      income:  new FormControl('',[Validators.required]),
      date:  new FormControl('',[Validators.required])
    })
  }
  addIncome = () => {
    this.serviceService.addIncome(this.form.value.income,this.form.value.date).subscribe(
      (response:any) => {
        
        console.log(response);
        // Successful response handling
        console.log('income added successfully:', response);
        this.router.navigate(['/detail-income']).then(() => {
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
          this.genericError = 'An error occurred while adding the income.';
        }
      }
    );
  }
  
  detailExpense() {
    // Use the router to navigate to the 'add-incomes' route
    // console.log('Button clicked')
    this.router.navigate(['/detail-expense']);
  }
  detailIncome() {
    // Use the router to navigate to the 'add-incomes' route
    // console.log('Button clicked')
    this.router.navigate(['/detail-income']);
  }
  logout = () => {
    this.authService.logOut();
    this.router.navigate(['/']);
  };
}

