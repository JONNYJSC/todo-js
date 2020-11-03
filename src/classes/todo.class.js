export class Todo {

    static fromJson({ id, tarea, completado, creado }) {

        const tempTodo = new Todo(tarea);

        this.id = id;
        this.completado = completado;
        this.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getTime(); // 12836871263
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}