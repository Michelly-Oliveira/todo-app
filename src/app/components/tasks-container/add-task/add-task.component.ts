import { Component, OnInit } from '@angular/core';

import Task from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  task!: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.task) {
      alert('Please add a task before proceeding');
      return;
    }

    const newTask: Task = {
      title: this.task,
      isDone: false,
    };

    this.taskService.addTask(newTask);

    this.task = '';
  }
}
