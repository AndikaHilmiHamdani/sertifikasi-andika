import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.page.html',
  styleUrls: ['./update-income.page.scss'],
})
export class UpdateIncomePage implements OnInit {

  form : FormGroup
  income:any;
  date:any;
  validationErrors: any;
  genericError: string | null = null;

  constructor(
    private authService: AuthserviceService,
    private serviceService: ServiceService,
    private router: Router,
    private routerId: ActivatedRoute
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
    const id = this.routerId.snapshot.paramMap.get('id');
    this.serviceService.getIncomebyId(id).subscribe((data:any)=>{
      this.income = data.income
      this.date = data.date_income
      this.form.value.income =  this.income
      this.form.value.date =  this.date      
    })

  }

  updateIncome(){
    const id = this.routerId.snapshot.paramMap.get('id');
    this.serviceService.updateIncome(this.form.value.income, this.form.value.date,id).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/detail-income']).then(() => {
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
