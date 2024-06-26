import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DureeComponent } from './pages/duree/duree.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { Page404Component } from './pages/404/404.component';
import { FormdemoComponent } from './pages/formdemo/formdemo.component';

const routes: Routes = [
  { path: '', redirectTo: 'duree', pathMatch: 'full' },
  { path: 'duree', component: DureeComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'form', component: FormdemoComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
