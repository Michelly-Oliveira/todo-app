import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

import Task from '../interfaces/Task';
import { Filter } from '../interfaces/Filter';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Array<Task> = [];
  private filter: Filter = 'all';
  private subject = new Subject<any>();

  constructor() {}

  addTask(newTask: Task): void {
    newTask.id = uuid();
    this.tasks.push(newTask);

    this.sendProps();
  }

  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);

    this.sendProps();
  }

  deleteCompletedTask(): void {
    this.tasks = this.tasks.filter((task) => !task.isDone);

    this.sendProps();
  }

  updateTaskStatus(taskId: string): void {
    this.tasks = this.tasks.map((task) => {
      const { id, isDone } = task;

      if (id === taskId) {
        task.isDone = !isDone;
      }

      return task;
    });

    this.sendProps();
  }

  changeFilter(newFilter: Filter): void {
    this.filter = newFilter;
    this.sendProps();
  }

  private filterTasks(): Array<Task> {
    if (this.filter === 'active') {
      const filteredTasks = this.tasks.filter((task) => !task.isDone);
      return filteredTasks;
    }

    if (this.filter === 'completed') {
      const filteredTasks = this.tasks.filter((task) => task.isDone);
      return filteredTasks;
    }

    return this.tasks;
  }

  private sendProps(): void {
    const filteredTasks = this.filterTasks();
    this.subject.next(filteredTasks);
  }

  getTasks(): Observable<any> {
    return this.subject.asObservable();
  }
}
