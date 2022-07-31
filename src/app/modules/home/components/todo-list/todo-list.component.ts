import { Component, OnInit } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Minha nova task 1', checked: true },
    { task: 'Minha nova task 2', checked: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  public deleteItemTaskList(event: any) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm(
      'Você realmente deseja apagar todos os itens da lista?'
    );
    if (confirm) {
      this.taskList = [];
    }
  }
}
