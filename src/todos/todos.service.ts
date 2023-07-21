import { Injectable } from '@nestjs/common';
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
}
