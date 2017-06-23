import { Lifestyle } from './lifestyle';
import { LIFESTYLES } from './mock-lifestyles';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs';

import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable() // tells typescript to emit metadata about the service
export class LifestyleService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    stylesUrl = '/lifestyles/api';  // URL to web api

    constructor(private http: Http, private router: Router) { }

    iName = '';
    iType = '';

//getStyles function
  getStyles(): Promise<Lifestyle[]> {
    return this.http.get(this.stylesUrl)
               .toPromise()
               .then(response => response.json().data as Lifestyle[])
               .catch(this.handleError);
  }
//get Style
  getStyle(): Promise<Lifestyle> {
    const url = `${this.stylesUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Lifestyle)
      .catch(this.handleError);
  }
//delete function
  delete(id: number): Promise<void> {
    const url = `${this.stylesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
//create 
 create(name: string, ltype: string): Promise<Lifestyle> {
    return this.http
      .post(this.stylesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Lifestyle)
      .catch(this.handleError);
  }

//handle Error
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }

  //add method
  addName(name: string, lifestyle: string): void {
      var myRouter = this.router;
      var header = new Headers();

   /*Unnsupported Media Type

      let formData: FormData = new FormData();
      formData.append('name', name);
      formData.append('lifestyle', lifestyle);
      */ 
      this.http
          .post("/lifestyles/api",{ name: name, lifestyle: lifestyle })
          .subscribe(data => { console.log(data) });

  }
}