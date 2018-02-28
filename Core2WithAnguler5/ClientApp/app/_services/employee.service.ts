import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { IEmployeeData } from '../_interfaces/IEmployeeData';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getEmployees() {
        return this._http.get(this.myAppUrl + 'api/employee/index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getEmployeeById(id: number) {
        return this._http.get(this.myAppUrl + "api/employee/details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    saveEmployee(employee : IEmployeeData) {
        return this._http.post(this.myAppUrl + 'api/employee/create', employee)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateEmployee(employee: IEmployeeData) {
        return this._http.put(this.myAppUrl + 'api/employee/edit', employee)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteEmployee(id : number) {
        return this._http.delete(this.myAppUrl + 'api/employee/delete/' + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}