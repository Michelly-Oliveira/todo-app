import { Component, Input, OnInit } from '@angular/core';

import Task from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id!);
  }

  updateTaskStatus(): void {
    this.taskService.updateTaskStatus(this.task.id!);
  }
}
