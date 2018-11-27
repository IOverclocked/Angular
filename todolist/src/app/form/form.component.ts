import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    taskContent = '';

    constructor() { }

    ngOnInit() {
    }

    addTask(event, taskContent) {
        event.preventDefault();
        console.log(taskContent);
    }

}
