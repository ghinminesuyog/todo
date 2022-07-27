import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Collection, Todo } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  collections: Collection[] = [];
  constantKeyName = 'constantKeyNameForTodo';

  constructor() { }

  addCollection(title) {
    const collection = new Collection(title);
    this.collections.splice(0, 0, collection);
  }

  getCollections(): Observable<Collection[]> {
    this.readFromLocalStorage();
    return of(this.collections);
  }

  readFromLocalStorage(): Collection[] {
    try {
      const collections = JSON.parse(localStorage.getItem(`${this.constantKeyName}`));
      this.collections = [];
      for (const collectionObject of collections) {
        const collection = new Collection(collectionObject.title);
        collection.todos = collectionObject.todos;
        collection.completedTasks = collectionObject.completedTasks;
        this.collections.push(collection as Collection);
      }
    } catch (error) {
      console.error(error);
      this.collections = [];
    }
    return this.collections;

  }

  saveCollections(collections: Collection[]): Observable<string> {
    collections ?
      localStorage.setItem(`${this.constantKeyName}`, JSON.stringify(collections)) :
      localStorage.setItem(`${this.constantKeyName}`, JSON.stringify(this.collections));
    // this.readFromLocalStorage();
    return of('Success');
  }

  deleteCollection(id: string): Observable<boolean> {
    const collectionObj = this.collections.find(collection => collection.id === id);
    const collectionIndex = this.collections.indexOf(collectionObj);
    if (collectionIndex > -1) {
      this.collections.splice(collectionIndex, 1);
      this.saveCollections(this.collections);
      return of(true);
    } else {
      return of(false);
    }
  }
}
