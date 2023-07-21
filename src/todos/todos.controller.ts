import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {
  //demander à l'injecteur de fournir une instance de todosService à l'aide d'un assesseur
  constructor(private readonly todosService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo) {
    // console.log('newTodo', newTodo);
    this.todosService.create(newTodo);
  }
}
