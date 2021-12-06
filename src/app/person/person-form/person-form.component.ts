import {Component, OnInit} from '@angular/core';
import {Person, PersonService} from "../person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators
} from "@angular/forms";

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
        private route: ActivatedRoute,
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
        if(!this.personForm.invalid) {
            const updatedPerson: Person = {
                id: this.route.snapshot.params['id'],
                firstName: this.personForm.value.firstName,
                lastName: this.personForm.value.lastName,
                dateOfBirth: this.personForm.value.dateOfBirth,
                email: this.personForm.value.email,
                telephone: this.personForm.value.telephone
            }
            this.personService.update(updatedPerson)
        }
    }


    private initForm() {
        let p = {...this.person}

        this.personForm = new FormGroup({
            firstName: new FormControl(p.firstName, [
                Validators.required,
            ]),
            lastName: new FormControl(p.firstName, [
                Validators.required,
            ]),
            dateOfBirth: new FormControl(p.dateOfBirth, Validators.required),
            telephone: new FormControl(p.telephone),
            email: new FormControl(p.email, this.emailValidator())
        });
    }

    emailValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const isValid = re.test(control.value);
            return !isValid ? {invalidEmail: {value: control.value}} : null;
        };
    }

    public checkError = (controlName: string, errorName: string) => {
        return this.personForm.controls[controlName].hasError(errorName);
    }

}
