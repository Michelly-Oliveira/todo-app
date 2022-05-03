import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksContainerComponent } from './components/tasks-container/tasks-container.component';
import { AddTaskComponent } from './components/tasks-container/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-container/tasks-list/tasks-list.component';
import { TasksFiltersComponent } from './components/tasks-container/tasks-filters/tasks-filters.component';
import { TaskItemComponent } from './components/tasks-container/tasks-list/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TasksContainerComponent,
    AddTaskComponent,
    TasksListComponent,
    TasksFiltersComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
