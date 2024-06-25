import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  taskName: string = '';
  taskUrgent: boolean = false;

  tasks: Array<any> = [];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  addTask() {
    const newTask = { name: this.taskName, urgent: this.taskUrgent };
    this.tasks.push(newTask);
    this.taskName = '';
    this.taskUrgent = false;
  }

  remove(task: any) {
    this.confirmationService.confirm({
      header: 'Êtes-vous sûr de vouloir supprimer cet élément?',
      accept: () => {
        // this.tasks.splice(this.tasks.indexOf(task), 1);
        this.tasks = this.tasks.filter(t => t !== task);
        this.messageService.add({
          severity: 'success',
          summary: 'Suppression confirmée'
        })
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Suppression annulée'
        })
      }
    });
  }
}
