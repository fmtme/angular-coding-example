import {Injectable} from '@angular/core';
import {PEOPLE} from "../../data/mock-data";

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string
}

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    personIdCounter = 0;
    personData: Person[] = []

    constructor() {
        this.transformMockJsonToData();
    }

    // massage this mock data a little to give us a date obj and assign Id
    private transformMockJsonToData() {
        this.personData = PEOPLE.map(p => {
            return {
                id: this.assignPersonIdAndIncrement(),
                firstName: p.firstName,
                lastName: p.lastName,
                dateOfBirth: new Date(p.dateOfBirth),
                email: p.email,
                telephone: p.telephone
            };
        });
    }

    private assignPersonIdAndIncrement(): number {
        let id = this.personIdCounter;
        this.personIdCounter++;
        return id;
    }

    getAll(){
        return this.personData;
    }
}
