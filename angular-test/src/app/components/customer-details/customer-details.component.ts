import { Component, OnInit } from '@angular/core';
import {CustomerDataService} from '../../services/customer-data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customerList : any =[];

  constructor(private customerDetailsService : CustomerDataService) { }

  ngOnInit() {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.customerDetailsService.getCustomersData().subscribe(data=>{
    let response = data;
    this.customerList = data ;
     
    })
  }

  showAddress(employeeId){
    this.customerDetailsService.getCustomerAddress(employeeId).subscribe(data=>{
      console.log("Success");
    })
  }

}
