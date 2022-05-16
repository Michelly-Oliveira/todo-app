import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
      .watchForChanges()
      .subscribe((value) => (this.tasks = value));
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteCompletedTasks(): void {
    this.taskService.deleteCompletedTask();
  }

  updateListOrder(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
