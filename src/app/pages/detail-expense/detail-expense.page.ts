import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-detail-expense',
  templateUrl: './detail-expense.page.html',
  styleUrls: ['./detail-expense.page.scss'],
})
export class DetailExpensePage implements OnInit {

  data_expense:any
  id_delete: any
  id_update:any

  constructor(
    private authService: AuthserviceService,
    private serviceService: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.serviceService.getExpense().subscribe((data:any)=>{
      this.data_expense = data
      console.log(data);
      if (data && data.length > 0) {
        this.id_delete = data[0].id;
        this.id_update = data[0].id // Assign the ID of the first expense in the array
        console.log('Expense ID to delete:', this.id_delete);
      }
      
    })
  }

  updateExpense () {
   
    console.log(this.id_update);
    this.router.navigate([`/update-expense/${this.id_update}`]);
    
  }
  addExpense() {
    // Use the router to navigate to the 'add-expenses' route
    // console.log('Button clicked')
    this.router.navigate(['/add-expenses']);
  }
  detailExpense() {
    // Use the router to navigate to the 'add-expenses' route
    // console.log('Button clicked')
    this.router.navigate(['/detail-expense']);
  }
  detailIncome() {
    // Use the router to navigate to the 'add-expenses' route
    // console.log('Button clicked')
    this.router.navigate(['/detail-income']);
  }
  deleteExpense () {
    console.log(this.data_expense.id);
    
    this.serviceService.deleteExpense(this.id_delete).subscribe(
      (data: any) => {
        console.log(this.id_delete);
        
        // Handle the successful response or perform any necessary actions
        console.log('Expense deleted successfully:', data);
        location.reload();
      },
      (error: any) => {
        // Handle errors or display error messages
        console.error('Error deleting expense:', error);
      }
    )
    
  }

  logout = () => {
    this.authService.logOut();
    this.router.navigate(['/']);
  };
}
