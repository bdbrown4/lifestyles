import { Lifestyle } from './lifestyle';
import { LIFESTYLES } from './mock-lifestyles';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { ListResult } from '../service/list-result.interface';
import { Router } from '@angular/router';
import 'rxjs/Rx'; // make sure 

import 'rxjs/add/operator/toPromise';

@Injectable() // tells typescript to emit metadata about the service
export class LifestyleService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    stylesUrl = '/lifestyles/api';  // URL to web api

    constructor(private http: Http, private router: Router) { }

    iName = '';
    iType = '';




  //add method
  addName(name: string, lifestyle: string): void {
     // var myRouter = this.router;
    //  var header = new Headers();

   /*Unnsupported Media Type

      let formData: FormData = new FormData();
      formData.append('name', name);
      formData.append('lifestyle', lifestyle);
      */ 
      this.http
          .post("/lifestyles/api", { name: name, lifestyle: lifestyle })
          .subscribe(data => { console.log(data) });

    }

  removeName(name: string, lifestyle: string, id: string): void {
      // var myRouter = this.router;
      //  var header = new Headers();
      this.http
          //.delete("lifestyles/api")
          .post("/lifestyles/delete", { name: name, lifestyle: lifestyle, id: id } )
         /* .map((res: Response) => {
              let body = <string[]>res.json();
              return body;
          });*/
      .subscribe(data => { console.log(data) }); //need subscribe

  }


  getNamesFromService(): Observable<string[]> {
      return this.http
          .get("/lifestyles/api")
          .map((res: Response) => {
              let body = <string[]>res.json();
              return body;
          });
  }
}