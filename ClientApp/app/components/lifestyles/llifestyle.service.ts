import { Lifestyle } from './lifestyle';
import { LIFESTYLES } from './mock-lifestyles';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
    getStyles(): Promise<Lifestyle[]> {
        //return LIFESTYLES 
        return Promise.resolve(LIFESTYLES);
    }
}