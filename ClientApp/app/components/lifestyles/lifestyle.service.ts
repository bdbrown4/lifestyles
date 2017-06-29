import { Lifestyle } from './lifestyle';
import { LIFESTYLES } from './mock-lifestyles';
import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/Rx'; // make sure 
@Injectable() // tells typescript to emit metadata about the service
export class LifestyleService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http, private router: Router, @Inject('ORIGIN_URL') private originUrl: string) { }
    iName = '';
    iType = '';
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    //add method
    addName(name: string, lifestyle: string): Observable<any> {
        let stylesUrl = '/lifestyles/api';  // URL to web api
        return this.http
            .post(this.originUrl + stylesUrl, { name: name, lifestyle: lifestyle })
            .catch(this.handleError);
    }
    removeName(name: string, lifestyle: string, id: string): Observable<any> {
        let stylesUrl = "/lifestyles/delete";
        return this.http
            //.delete("lifestyles/api")
            .post(this.originUrl + stylesUrl, { name: name, lifestyle: lifestyle, id: id })
            .catch(this.handleError);
        /* .map((res: Response) => {
             let body = <string[]>res.json();
             return body;
         });*///need subscribe
    }
    getNamesFromService(): Observable<string[]> {
        let stylesUrl = '/lifestyles/api';  // URL to web ap
        return this.http
            .get(this.originUrl + stylesUrl)
            .map((res: Response) => {
                let body = <string[]>res.json();
                return body;
            })
            .catch(this.handleError);
    }
    updateName(name: string, lifestyle: string, id: string): Observable<any> {
        let stylesUrl = "/lifestyles/update";
        return this.http
            .post(this.originUrl + stylesUrl, { name: name, lifestyle: lifestyle, id: id })
            .catch(this.handleError); //need subscribe
    }
}