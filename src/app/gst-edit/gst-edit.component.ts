import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import Business from '../models/Business';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.scss']
})
export class GstEditComponent implements OnInit {
  observableBusines: Observable<Business>;
  angForm: FormGroup;
  id: String;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.observableBusines = this.bs.editBusiness(this.id);
    });
  }

  updateBusiness(person_name, business_name, business_gst_number) {
    this.bs.updateBusiness(person_name, business_name, business_gst_number, this.id);
    this.router.navigate(['business']);
  }
}
