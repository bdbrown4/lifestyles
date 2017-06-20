import { Component } from '@angular/core';
import { Lifestyle } from './lifestyle';
import { LIFESTYLES } from './mock-lifestyles';
import { Router } from '@angular/router';

@Component({
    selector: 'lifestyles',
    templateUrl: './lifestyles.component.html'
})

export class LifestylesComponent {
    //create instance of Lifestyle, public property
    lifestyles = LIFESTYLES;

    //selectedStyle
    selectedStyle: Lifestyle;

    //onSelect object - class, this.selectedStyle will equal style element
    onSelect(style: Lifestyle): void {
        this.selectedStyle = style;
    }
    /*
    constructor(
        private router: Router
    ) { }

    //go to detail page
    add(): void {
        this.router.navigate(['/detail']);
    }*/
}