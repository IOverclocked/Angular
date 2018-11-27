import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    taskContent: string;

    @Output()
    emitTaskContent = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    addTask() {
        this.emitTaskContent.emit(this.taskContent);
        this.taskContent = '';
    }

}
