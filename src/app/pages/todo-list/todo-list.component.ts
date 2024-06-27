import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Itask } from '../../models/itask';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  taskName: string = '';
  taskUrgent: boolean = false;
  taskQty: number = 1;

  tasks: Array<Itask>;

  nbView : number = 0
  listView : number[] = [5, 10, 15, 20]

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private _todoService : TodoService
  ) {
    this.tasks = this._todoService.tasks;
  }

  addTask() {
    const newTask : Itask = {
      name: this.taskName.trim(),
      urgent: this.taskUrgent,
      quantity: this.taskQty,
    };
    try {
      this.tasks = this._todoService.addTask(newTask);
    } catch (error : any) {
      this.messageService.add({
        severity: 'error',
        summary: error.message,
      })
    }
    this.taskName = '';
    this.taskUrgent = false;
    this.taskQty = 1;
  }

  remove(task: Itask) {
    this.confirmationService.confirm({
      header: 'Êtes-vous sûr de vouloir supprimer cet élément?',
      accept: () => {
        // this.tasks.splice(this.tasks.indexOf(task), 1);
        try{
          this.tasks = this._todoService.removeTask(task.name);
          this.messageService.add({
            severity: 'success',
            summary: 'Suppression confirmée',
          })
        }
        catch(error : any){
          this.messageService.add({
            severity: 'error',
            summary: error.message,
          })
        }
        
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Suppression annulée'
        })
      }
    });
  }

  check(item: Itask) {
    try {
      this._todoService.decreaseQuantity(item.name, 1);
      this.tasks = this._todoService.tasks;
    } catch(error : any){
      this.messageService.add({
        severity: 'error',
        summary: error.message,
      })
    }
  }
}
