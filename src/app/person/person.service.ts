import {Injectable} from '@angular/core';
import {PEOPLE} from "../../data/mock-data";

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    telephone: string;
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

    getById(personId: number): Person | undefined {
        return this.personData.find(({id}) => id == personId)
    }

    update(p: Person): void {
        let newData = [...this.personData];
        const index = newData.findIndex(el => el.id == p.id);
        if (index !== -1) {
            newData[index] = p
        }
        this.personData = newData;
    }

}
