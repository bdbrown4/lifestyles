﻿import { Component, OnInit } from '@angular/core';
import { Lifestyle } from './lifestyle';
import { LIFESTYLES } from './mock-lifestyles';
import { LifestyleService } from './lifestyle.service';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'lifestyles',
    templateUrl: './lifestyles.component.html',
    providers: [LifestyleService]
})
//@Injectable()
export class LifestylesComponent implements OnInit {
    //create instance of Lifestyle, public property
    lifestyles = LIFESTYLES;
    //lifestyles = Lifestyle[];
    //selectedStyle
    selectedStyle: Lifestyle;

    //for the add method, initialization
    iName = '';
    iType = '';
    number = LIFESTYLES.length;

    //live in delete
    dName = '';
    dStyle = '';
    dId = '';

    //setting up get values
 styles: Lifestyle[];

    //onSelect object - class, this.selectedStyle will equal style element
    onSelect(style: Lifestyle): void {
        this.selectedStyle = style;
    }
      
    //constructor to  make lifeService private store Service
    //constructor(public lifeService: LifestyleService) { }
    constructor(private lifestyleService: LifestyleService, private router: Router
    ) { }

    //add method
    add( name: string, lifestyle: string): void {

        //string variable
        this.iName = name.trim();
        this.iType = lifestyle.trim();

        this.lifestyleService.addName(this.iName, this.iType);
        this.router.navigate['./home'];
    }


    //create an array
    names: Array<string>;

    ngOnInit(){
        this.getNames();
    }

    getNames(): Observable<string[]> {
        this.lifestyleService.getNamesFromService().subscribe(names => this.names = names);
        return ;
    }

    deleteName(name: string, lifestyle: string, id: string): void {
        this.dName = name.trim();
        this.dStyle = lifestyle.trim();
        this.dId = id.trim();
        this.lifestyleService.removeName(this.dName, this.dStyle, this.dId);
        this.router.navigate['/lifestyles'];
    }

}