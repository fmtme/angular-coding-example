import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PersonService} from "../person.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BreakpointObserver , BreakpointState} from "@angular/cdk/layout";

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
    isDesktop: boolean;

    constructor(private personService: PersonService, private breakpointObserver: BreakpointObserver) {}

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.personService.getAll())
        console.log(this.dataSource)
        this.breakpointObserver
            .observe(['(min-width: 700px)'])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    console.log('Viewport width is 500px or greater!');
                    this.isDesktop = true;
                } else {
                    console.log('Viewport width is less than 500px!');
                    this.isDesktop = false
                }
            });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    onRowClick(id: number): void {
        console.log(id)
    }

    applySearchFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
