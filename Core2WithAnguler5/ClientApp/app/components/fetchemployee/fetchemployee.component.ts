import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { IEmployeeData } from '../../_interfaces/IEmployeeData';
import { Router } from '@angular/router';
import { EmployeeService } from '../../_services/employee.service';

@Component({
    selector: 'fetchemployee',
    templateUrl: './fetchemployee.component.html'
})
export class FetchEmployeeComponent {
    public empList: IEmployeeData[];

    constructor(public _http: Http, private _router: Router, private _employeeService: EmployeeService) {
        this.getEmployees();
    }

    getEmployees() {
        this._employeeService.getEmployees().subscribe(
            data => this.empList = data
        )
    }
}
