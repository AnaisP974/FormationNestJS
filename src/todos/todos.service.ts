import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

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
  //création d'une méthode findAll() qui retourne la liste des todos dans un array
  findAll(): Todo[] {
    return this.todos;
  }
}
