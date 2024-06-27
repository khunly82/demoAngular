import { Injectable } from '@angular/core';
import { Itask } from '../models/itask';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks : Itask[] = [];

  constructor() { }

  public addTask(task : Itask) : Itask[]{
    if(!task.name) throw new Error("La tâche n'a pas de nom");
    if(task.quantity <= 0) throw new RangeError("La quantité doit être supérieur à 0");
    try {
      this.increaseQuantity(task.name, task.quantity);
    } catch (error) {
      this.tasks.push(task);
    }
    return this.tasks;
  }

  public removeTask(name : string) : Itask[]{
    if(!name) throw new Error("La tâche n'a pas de nom");
    if(!this.tasks.map(t => t.name).includes(name)) throw new RangeError("La tâche n'est pas présente");
    this.tasks = this.tasks.filter(t => t.name != name);
    return this.tasks;
  }

  public increaseQuantity(name : string, qty: number){
    if(!name) throw new Error("La tâche n'a pas de nom");
    if(qty <= 0) throw new RangeError("La quantité doit être supérieur à 0");
    if(!this.tasks.map(t => t.name).includes(name)) throw new RangeError("La tâche n'est pas présente");
    let currentTask = this.tasks.filter(t => t.name == name)[0];
    currentTask.quantity += qty;
  }
  
  public decreaseQuantity(name : string, qty: number){
    if(!name) throw new Error("La tâche n'a pas de nom");
    if(qty <= 0) throw new RangeError("La quantité doit être supérieur à 0");
    if(!this.tasks.map(t => t.name).includes(name)) throw new RangeError("La tâche n'est pas présente");
    let currentTask = this.tasks.filter(t => t.name == name)[0];
    currentTask.quantity -= qty;
  }
}
