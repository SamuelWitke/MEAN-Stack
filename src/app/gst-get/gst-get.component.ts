import { Component, OnInit } from '@angular/core';
import Business from '../models/Business';
import { BusinessService } from '../business.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {

  observableBusiness: Observable<Business[]>;

  constructor(private bs: BusinessService) { }

  ngOnInit() {
    this.observableBusiness = this.bs
      .getBusinesses();
  }
  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
      this.observableBusiness = this.bs
        .getBusinesses();
    });
  }
}
