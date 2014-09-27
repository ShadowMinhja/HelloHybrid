//app.controller.js
app.controller = function () {
    this.pages = app.PageList();

    this.rotate = function () {
        this.pages().push(this.pages().shift())
    }.bind(this)
};

//************************//
//CONTROLLERS
//************************//
todo.controller = function () {
    this.list = new todo.TodoList();
    this.description = m.prop("");

    this.add = function () {
        if (this.description()) {
            this.list.push(new todo.Todo({
                description: this.description()
            }));
            this.description("");
        }
    }.bind(this);

    this.onunload = function () {
    };
};

person.controller = function () {
    this.list = new person.PersonList();
    this.firstName = m.prop("");
    this.lastName = m.prop("");
    this.fullName = m.prop("");

    this.list.push(new person.Person({
        firstName: "Minh", lastName: "Nguyen"
    }));
    this.add = function () {
        if (this.firstName()) {
            this.list.push(new person.Person({
                firstName: this.firstName()
            }));
            this.firstName("");            
        }
    }.bind(this);
};