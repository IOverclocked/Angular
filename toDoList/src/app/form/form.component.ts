import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

    @Output() public task = new EventEmitter();
    private contentTask: string;

    constructor() { }

    ngOnInit() { }

    addTask(contentTask: string) {
        this.task.emit(contentTask);
        this.contentTask = '';
    }
}
