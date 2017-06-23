//import { InMemoryDbService } from '../../../angular-in-memory-web-api';
export class InMemoryDataService {
    createDb() {
        const lifestyles =
            [
                { id: 1, name: 'Abram', lifestyle: 'Pure' },

                { id: 2, name: 'Josh', lifestyle: 'Pure' },
                { id: 3, name: 'Patrick', lifestyle: 'Pure' },
                { id: 4, name: 'Adam ', lifestyle: 'Pure' },
                { id: 5, name: 'Ben', lifestyle: 'Pure' },

                { id: 6, name: 'Demetre Phipps', lifestyle: 'Pure' }
            ];
        return { lifestyles };
    }
}
