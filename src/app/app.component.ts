import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = []; 

  public title: String = "To Do List";

  public form: FormGroup;

  constructor(private fb: FormBuilder){


    this.form = this.fb.group({


      title: ['', Validators.compose([

        Validators.minLength(3),
        Validators.maxLength(20 ),
        Validators.required,

      ])]

    })
    this.todos.push(new Todo('Estudar', false, 1));
    this.todos.push(new Todo('Trabalhar', true, 2));
    this.todos.push(new Todo('Lavar os pratos', false, 3));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1 ){
      this.todos.splice(index, 1);

    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }
  markAsUndone(todo: Todo){
    todo.done = false;
  }
}
