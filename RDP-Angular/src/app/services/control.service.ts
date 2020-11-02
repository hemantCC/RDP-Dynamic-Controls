import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getControlsUrl } from '../config/apiUrl';

@Injectable({
  providedIn: 'root'
})

//performs control related operations
export class ControlService {

  constructor(private http: HttpClient) {}

  //returns all the controls and its details 
  getControls() {
    return this.http.get(getControlsUrl);
  }
  
}
