import { Component, OnInit } from '@angular/core';

import { Filter, FilterOptions } from 'src/app/interfaces/Filter';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-filters',
  templateUrl: './tasks-filters.component.html',
  styleUrls: ['./tasks-filters.component.css'],
})
export class TasksFiltersComponent implements OnInit {
  filterOptions: FilterOptions = ['all', 'completed', 'active'];
  selectedFilter: Filter = 'all';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  changeFilter(filter: Filter): void {
    this.selectedFilter = filter;

    this.taskService.changeFilter(this.selectedFilter);
  }
}
