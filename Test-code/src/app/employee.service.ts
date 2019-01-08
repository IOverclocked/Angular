import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

    private _url = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<IEmployee[]> {
        console.log(this._url);
        return this.http.get<IEmployee[]>(this._url);
    }
}
