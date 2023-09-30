import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.page.html',
  styleUrls: ['./update-expense.page.scss'],
})
export class UpdateExpensePage implements OnInit {
  form : FormGroup
  expense:any;
  date:any;
  validationErrors: any;
  genericError: string | null = null;

  constructor(
    private authService: AuthserviceService,
    private serviceService: ServiceService,
    private router: Router,
    private routerId: ActivatedRoute
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
    const id = this.routerId.snapshot.paramMap.get('id');
    this.serviceService.getExpensebyId(id).subscribe((data:any)=>{
      this.expense = data.expense
      this.date = data.date_expense
      this.form.value.expense =  this.expense
      this.form.value.date =  this.date      
    })

  }

    updateExpense(){
      const id = this.routerId.snapshot.paramMap.get('id');
      this.serviceService.updateExpense(this.form.value.expense, this.form.value.date,id).subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/detail-expense']).then(() => {
            // Use window.location to reload the page
            window.location.reload();
          });
         
        },
        (error: any) => {
          // Handle errors, e.g., display an error message
        }
      );
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
