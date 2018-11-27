import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'todolist';
    tasksToDo: Array<string> = [];
    tasksDone: Array<string> = [];

    addTask(taskContent: string) {
        this.tasksToDo.push(taskContent);
    }

}
