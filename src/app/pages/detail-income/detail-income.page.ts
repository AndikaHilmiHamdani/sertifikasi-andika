import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Chart from 'chart.js/auto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-detail-income',
  templateUrl: './detail-income.page.html',
  styleUrls: ['./detail-income.page.scss'],
})
export class DetailIncomePage implements OnInit {

  data_income:any
  id_delete: any
  id_update:any

  constructor(
    private authService: AuthserviceService,
    private serviceService: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.serviceService.getIncome().subscribe((data:any)=>{
      this.data_income = data
      console.log(data);
      if (data && data.length > 0) {
        this.id_delete = data[0].id;
        this.id_update = data[0].id // Assign the ID of the first income in the array
        console.log('income ID to delete:', this.id_delete);
      }
      
    })
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

  
  addIncome() {
    // Use the router to navigate to the 'add-incomes' route
    // console.log('Button clicked')
    this.router.navigate(['/add-income']);
  }
  updateIncome() {
   
    console.log(this.id_update);
    this.router.navigate([`/update-income/${this.id_update}`]);
    
  }
  deleteincome () {
    console.log(this.data_income.id);
    
    this.serviceService.deleteIncome(this.id_delete).subscribe(
      (data: any) => {
        console.log("id cok: ",this.id_delete);
        
        // Handle the successful response or perform any necessary actions
        console.log('income deleted successfully:', data);
        location.reload();
      },
      (error: any) => {
        // Handle errors or display error messages
        console.error('Error deleting income:', error);
      }
    )
    
  }

  logout = () => {
    this.authService.logOut();
    this.router.navigate(['/']);
  };
}
