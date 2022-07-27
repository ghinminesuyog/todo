export class Todo {
    title: string;
    isDone: boolean;
    id: string;

    constructor(title: string) {
        this.title = title;
        this.isDone = false;
        this.id = 'id' + Math.random().toString(16).slice(2);
    }
}

export class Collection {
    title: string;
    todos: Todo[];
    completedTasks: Todo[];
    id: string;

    constructor(title) {
        this.title = title;
        this.todos = [];
        this.completedTasks = [];
        this.id = 'collectionId' + Math.random().toString(16).slice(2);
    }

    addTask(title: string) {
        const newTodo = new Todo(title);
        this.todos.splice(0, 0, newTodo);
        return newTodo;
    }

    removeTask(id: string) {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
        } else {
            const completedTaskIndex = this.completedTasks.findIndex(todo => todo.id === id);
            console.log(completedTaskIndex)
            if (completedTaskIndex > -1) {
                this.completedTasks.splice(completedTaskIndex, 1);
            }
        }
    }

    markAsTodo(id: string) {
        const todoObject = this.completedTasks.find(toDo => toDo.id === id);
        const todoIndex = this.completedTasks.indexOf(todoObject);
        this.completedTasks.splice(todoIndex, 1);
        console.log(todoObject);
        todoObject.isDone = false;
        this.todos.push(todoObject);
    }

    markAsComplete(id: string) {
        const todoObject = this.todos.find(toDo => toDo.id === id);
        const todoIndex = this.todos.indexOf(todoObject);
        this.todos.splice(todoIndex, 1);
        todoObject.isDone = true;
        this.completedTasks.push(todoObject);
    }

    markAllAsTodo() {
        this.completedTasks.forEach(
            (todo) => {
                todo.isDone = false;
                this.todos.push(todo);
            }
        );
        this.completedTasks = [];
    }

    markAllAsComplete() {
        this.todos.forEach(
            (todo) => {
                todo.isDone = true;
                this.completedTasks.push(todo);
            }
        );
        this.todos = [];
    }
}
