import { Component, OnInit } from '@angular/core';
import { Lifestyle } from './lifestyle';
import { LIFESTYLES } from './mock-lifestyles';
import { LifestyleService } from './lifestyle.service';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


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
    iName = '';
    iType = '';
    number = LIFESTYLES.length;
    life: number;


    private headers = new Headers({ 'Content-Type': 'application/json' });
    private stylesUrl = 'api/styles';  // URL to web api

    //onSelect object - class, this.selectedStyle will equal style element
    onSelect(style: Lifestyle): void {
        this.selectedStyle = style;
    }
      
    //constructor to  make lifeService private store Service
    //constructor(public lifeService: LifestyleService) { }
    constructor( private lifestyleService: LifestyleService
    //    private styleService: LifestyleService
    ) { }

    //add method
    add( name: string, lifestyle: string): void {

        //string variable
        this.iName = name.trim();
        this.iType = lifestyle.trim();

        this.lifestyleService.addName( this.iName, this.iType);
    }

    getStyle(): void {
       //this.styleService
            //.getStyle()
           // .then(style => this.lifestyles = style);
    }
    //ngOnInit
    ngOnInit(): void {
        this.getStyle();
    }
}