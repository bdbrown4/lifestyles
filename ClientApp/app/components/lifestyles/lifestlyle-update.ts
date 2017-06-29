import { Component } from '@angular/core';
import { LifestyleService } from './lifestyle.service';

import { LifestylesComponent } from './lifestyles.component';
import { Lifestyle } from './lifestyle';
import { Router } from '@angular/router';

@Component({
    selector: 'lifestyleUpdate',
    template:`
<h1>Lifestyles Edit</h1>
`,
    providers: [LifestyleService]
})

export class LifestyleUpdate{}
