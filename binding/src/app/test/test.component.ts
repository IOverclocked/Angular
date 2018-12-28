import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    public name = 'Osiatycki';
    public myId = 'inputId';
    public isDisabled = true;
    public classTextSuccess = 'text-success';
    public hasError = false;
    public isLoadnig = false;
    public messageClass = {
        'text-success': !this.hasError,
        'text-error': this.hasError,
        'text-loading': this.isLoadnig
    };
    public hightlightColor = 'orange';
    public titleStyle = {
        color: 'blue',
        fontSize: '12px'
    };
    public messageOnClick = '';

    constructor() { }

    ngOnInit() {
    }

    greetUser() {
        return `Welcome ${this.name}`;
    }

    handleClick() {
        console.log('Elo siema');
        this.messageOnClick = 'Elo siema i cie nie ma!';
    }

    handleClick2(event) {
        console.log(event);
        this.messageOnClick = event.type;
    }

    logMessage(value) {
        console.log(value);
    }
}
