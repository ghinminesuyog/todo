import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Collection, Todo } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() collection: Collection;
  @Output() saveCollectionChanges: EventEmitter<Collection> = new EventEmitter();
  newTaskTitle: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  addNewTask() {
    if (this.newTaskTitle) {
      this.collection.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
      this.saveCollectionChanges.emit(this.collection);
    }
  }

  changeTaskTitle(collectionId: string, taskId: string) {
    this.saveCollectionChanges.emit(this.collection);
  }

  toggleDoneStatus(todo: Todo) {
    todo.isDone ?
      this.collection.markAsTodo(todo.id) :
      this.collection.markAsComplete(todo.id);
    this.saveCollectionChanges.emit(this.collection);
  }

  deleteTask(todo: Todo) {
    this.collection.removeTask(todo.id);
    console.log(this.collection);
    this.saveCollectionChanges.emit(this.collection);
  }

  markAllAsDone() {
    this.collection.markAllAsComplete();
    this.saveCollectionChanges.emit(this.collection);
  }

  markAllAsTodo() {
    this.collection.markAllAsTodo();
    this.saveCollectionChanges.emit(this.collection);
  }

  renameCollection(newName: string) {
    if (newName) {
      this.appService.saveCollections(this.appService.collections);
    }
  }

  removeAllCompleted() {
    this.collection.completedTasks = [];
    this.saveCollectionChanges.emit(this.collection);
  }

  clearAll() {
    this.collection.todos = [];
    this.collection.completedTasks = [];
    this.saveCollectionChanges.emit(this.collection);
  }

  deleteCollection() {
    this.appService.deleteCollection(this.collection.id).subscribe(
      (response) => {
        console.log('Collection deleted', response);
        this.collection = null;
      }
    );
  }
}
