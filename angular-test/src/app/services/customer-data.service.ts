import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject,Observable, throwError,Subject} from 'rxjs';
import {catchError, map, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  private showAddressClickedPrivate: Subject<any> = new Subject<any>();
  public readonly showAddressClicked: Observable<any> = this.showAddressClickedPrivate.asObservable();

  constructor(private http : HttpClient) { }

  getCustomersData()
  {
    let url = 'http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get(url);
  }

  getCustomerAddress(id){
    let url = '/assets/address.json'
    return this.http.get(url)
     .pipe(
      map(res => {
        //Using Oservables & Subject to pass on data. We can use @Input()/@Output() for parent-child component
        this.showAddressClickedPrivate.next(res[id]);
      }))
    }
}
