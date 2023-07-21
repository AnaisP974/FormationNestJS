import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  // Définir les données
  todos: Todo[] = [
    {
      id: 1,
      title: 'todos app',
      description: 'Create NestJS todos app',
      done: false,
    },
    {
      id: 2,
      title: 'bread',
      description: 'buy bread',
      done: true,
    },
    {
      id: 3,
      title: 'wine',
      description: 'buy wine',
      done: true,
    },
  ];

  //création de la méthode findOne()
  findOne(id: string) {
    return this.todos.find((todo) => todo.id === Number(id));
  }
  //création d'une méthode findAll() qui retourne la liste des todos dans un array
  findAll(): Todo[] {
    return this.todos;
  }
  //création de la méthode create()
  create(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo as Todo];
  }

  update(id: string, todo: Todo) {
    //récupérer le todo à jour
    const todoToUpdate = this.todos.find((t) => t.id === +id);
    //si l'on ne retrouve pas l'id à modifier, on retourne une exception
    if (!todoToUpdate) {
      return new NotFoundException('booooo did you find this todo');
    }
    //appliquer les modifications
    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    const updatedTodos = this.todos.map((t) =>
      t.id !== +id ? t : todoToUpdate,
    );
    this.todos = [...updatedTodos];
    return { updatedTodo: 1, todo: todoToUpdate };
  }

  delete(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter((t) => t.id !== +id)];
    if (this.todos.length < nbOfTodosBeforeDelete) {
      return { deleteTodos: 1, nbTodos: this.todos.length };
    } else {
      return { deleteTodos: 0, nbTodos: this.todos.length };
    }
  }
}
