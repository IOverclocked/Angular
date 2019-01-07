import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {

    constructor() { }

    getEmployees() {
        return [
            { 'id': 1, 'name': 'Michał', 'age': 25 },
            { 'id': 2, 'name': 'Jan', 'age': 32 },
            { 'id': 3, 'name': 'Marek', 'age': 33 },
            { 'id': 4, 'name': 'Andrzej', 'age': 56 },
        ];
    }
}
