import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
//url
private _url: string = "https://7834-114-125-127-24.ngrok-free.app/api";
token:any 
  constructor(private http: HttpClient) { }

  getExpense = () => {
    // this.token = localStorage.getItem('access_token')
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.http.get(this._url + "/expense", httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  getExpensebyId = (id:any) => {
    // this.token = localStorage.getItem('access_token')
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    const getId = id
    return this.http.get(this._url + `/expense/${getId}`, httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  addExpense = (expense:any,date_expense:any) => {
    const payload = {expense,date_expense}
    console.log();
    
    // this.token = localStorage.getItem('access_token')
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.http.post(this._url + "/expense", payload,httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  updateExpense = (expense:any,date_expense:any,id:any) => {
    const payload = {expense,date_expense}
    console.log();
    
    // this.token = localStorage.getItem('access_token')
    const getId = id
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.http.put(this._url + `/expense/${getId}`, payload,httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  deleteExpense = (id:any) => {
  
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    const url = `${this._url}/expense/${id}`;

    return this.http.delete(url,httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }


  getIncome = () => {
    // this.token = localStorage.getItem('access_token')
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.http.get(this._url + "/income", httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  getIncomebyId = (id:any) => {
    // this.token = localStorage.getItem('access_token')
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    const getId = id
    return this.http.get(this._url + `/income/${getId}`, httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  addIncome = (income:any,date_income:any) => {
    const payload = {income,date_income}
    console.log();
    
    // this.token = localStorage.getItem('access_token')
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.http.post(this._url + "/income", payload,httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  updateIncome = (income:any,date_income:any,id:any) => {
    const payload = {income,date_income}
    console.log();
    
    // this.token = localStorage.getItem('access_token')
    const getId = id
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    return this.http.put(this._url + `/income/${getId}`, payload,httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  deleteIncome = (id:any) => {
  
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })
    };
    const url = `${this._url}/income/${id}`;

    return this.http.delete(url,httpOptions).pipe(
      catchError(this.errorHttpHandler)
    )
  }


  errorHttpHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
