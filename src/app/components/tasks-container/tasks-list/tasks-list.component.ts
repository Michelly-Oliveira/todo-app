import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import Task from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  tasks: Array<Task> = [];
  subscription!: Subscription;

  constructor(private taskService: TaskService) {
    this.subscription = this.taskService
      .getTasks()
      .subscribe((value) => (this.tasks = value));
  }

  ngOnInit(): void {}
}
