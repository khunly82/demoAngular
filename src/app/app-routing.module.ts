import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DureeComponent } from './pages/duree/duree.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'duree', pathMatch: 'full' },
  { path: 'duree', component: DureeComponent },
  { path: 'todo', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
