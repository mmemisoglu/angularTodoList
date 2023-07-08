export class Model {
    user;
    items;

    constructor() {
        this.user = "Mustafa";
        this.items = [
                new TodoItem("Spor", false),
                new TodoItem("Futbol", true),
                new TodoItem("Sinema", false),
                new TodoItem("Yemek", false)
                ]; 
    }
}

export class TodoItem {
    description;
    action;
    constructor(description:any, action:any) {
        this.description = description;
        this.action = action;
    }
}