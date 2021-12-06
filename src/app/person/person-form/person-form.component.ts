import {Component, OnInit} from '@angular/core';
import {Person, PersonService} from "../person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
    person: Person | undefined;
    personForm: FormGroup;

    minDate = new Date(1900, 0, 1);
    maxDate = new Date();
    startDate = new Date(2000, 0, 1);

    constructor(
        private personService: PersonService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.person = this.personService.getById(this.route.snapshot.params['id']);
        // if no person with uuid found, redirect to not found
        if (!this.person) {
            this.router.navigate(['/not-found'])
        }
        this.initForm();
    }

    onSubmit() {
        // todo: validate form data

        this.personService.update({
            id: this.route.snapshot.params['id'],
            firstName: this.personForm.value.first_name,
            lastName: this.personForm.value.last_name,
            dateOfBirth: this.personForm.value.dob,
            email: this.personForm.value.email,
            telephone: this.personForm.value.telephone
        })
    }


    private initForm() {
        let p = {...this.person}
        console.log(p)
        this.personForm = new FormGroup({
            'firstName': new FormControl(p.firstName),
            'lastName': new FormControl(this.person?.lastName),
            'dateOfBirth': new FormControl(this.person?.dateOfBirth),
            'telephone': new FormControl(this.person?.telephone),
            'email': new FormControl(this.person?.email),
        });
    }
}
