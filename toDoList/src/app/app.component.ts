import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck {
    public tasks: string[];
    public task: string;

    ngDoCheck() {
        console.log(this.task);
        if (this.task) {
            this.tasks.push(this.task);
        }
    }
}
