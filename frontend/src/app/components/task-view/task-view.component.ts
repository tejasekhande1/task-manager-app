import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-task-view',
    templateUrl: './task-view.component.html',
    styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

    lists: any

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                console.log(params)
            }
        )
        this.getLists()
    }

    getLists() {
        this.taskService.getList().subscribe((response: any) => {
            this.lists = response.data
            console.log(this.lists)
        })
    }

}
