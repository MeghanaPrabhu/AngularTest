import { Component, OnInit } from '@angular/core';
import {CustomerDataService} from '../../services/customer-data.service';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit {

  addressList : any;

  constructor(private customerDataService : CustomerDataService) {
  
   }

  ngOnInit() {
    this.customerDataService.showAddressClicked.subscribe(data =>
      {
        console.log(data);
        this.addressList = data;
      })
  }

}
