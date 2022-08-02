import { Component, DoCheck, OnInit } from '@angular/core';
import { last } from 'rxjs';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || ''
  );

  constructor() {}

  ngDoCheck() {
    this.setLocalStorage();
  }

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

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (element1, element2) =>
          Number(element1.checked) - Number(element2.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
