import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  token: any;
  currentUser: any;
  isLoggedIn = false;

  transaction_chart: any = [];
  transaction_data: any = [];

  expense_promise: any;
  data_expense: any = [];
  date_expense: any = [];

  income_promise: any;
  data_income: any = [];
  date_income: any = [];

  constructor(
    private authService: AuthserviceService,
    private serviceService: ServiceService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void>{
    this.token = localStorage.getItem('access_token');

    this.serviceService.getExpense().subscribe((data:any)=>{

      for (let item of data) {
        this.data_expense.push(item.expense)
        this.date_expense.push(item.date_expense)
      }

      this.transaction_chart = new Chart('barCanvas', {
        type: 'line',
        data: {
          labels: this.date_expense,
          datasets: [{
            label: 'Expense',
            data: this.data_expense,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              ticks: {
                color: 'white',
              }
            },
            y: {
              ticks: {
                color: 'white',
              }
            }
          }
        }
      })
      
      
    })
    this.serviceService.getIncome().subscribe((data:any)=>{
      for (let item of data) {
        this.data_income.push(item.income)
        this.date_income.push(item.date_income)

      }
      this.transaction_chart = new Chart('lineCanvas', {
        type: 'line',
        data: {
          labels: this.date_income,
          datasets: [{
            label: 'Income',
            data: this.data_income,
            backgroundColor: [
              // 'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              // 'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              ticks: {
                color: 'white',
              }
            },
            y: {
              ticks: {
                color: 'white',
              }
            }
          }
        }
      })
    })
  }


  addExpense() {
    // Use the router to navigate to the 'add-expenses' route
    // console.log('Button clicked')
    this.router.navigate(['/add-expenses']);
  }
  addIncome() {
    // Use the router to navigate to the 'add-expenses' route
    // console.log('Button clicked')
    this.router.navigate(['/add-income']);
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
  logout = () => {
    this.authService.logOut();
    this.router.navigate(['/']);
  };
}
