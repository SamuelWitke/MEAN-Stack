import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Business from './models/Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name,
      business_name,
      business_gst_number
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(`${this.uri}/add`, obj);
  }
  getBusinesses(): Observable<Business[]> {
    return this
      .http
      .get<Business[]>(`${this.uri}`);
  }

  editBusiness(id): Observable<Business> {
    return this
      .http
      .get<Business>(`${this.uri}/edit/${id}`);
  }
  updateBusiness(person_name, business_name, business_gst_number, id) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteBusiness(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }

}
