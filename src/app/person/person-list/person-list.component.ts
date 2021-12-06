import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PersonService} from "../person.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BreakpointObserver , BreakpointState} from "@angular/cdk/layout";
import {Router} from "@angular/router";

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    // using MatTableDataSource for this demo app. It allows for client side filter, sort, pagination.
    // in a real app these are things we'd probably do on server
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email']; // this determines visual order, not ng-container in template
    isDesktop: boolean = true;

    constructor(
        private personService: PersonService,
        private breakpointObserver: BreakpointObserver,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.personService.getAll())
        this.breakpointObserver
            .observe(['(min-width: 700px)'])
            .subscribe((state: BreakpointState) => {
                this.isDesktop = state.matches;
            });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }



    onRowClick(id: number): void {
        console.log(id)
        this.router.navigate([`/person/${id}`])
    }

    applySearchFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
