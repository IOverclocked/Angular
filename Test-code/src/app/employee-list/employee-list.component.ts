import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    public employees: object[];

    constructor(private _employeeService: EmployeeService) { }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(data => {
                console.log(data);
                this.employees = data;
            });
    }

}
