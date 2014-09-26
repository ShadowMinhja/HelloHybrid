//app.model.js
var app = {};

app.PageList = function () {
    return m.prop(pages);
};

//************************//
//MODELS
//************************//
var todo = {};

todo.Todo = function (data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
};

todo.TodoList = Array;

//KNOCKOUT CLONE TEST
var person = {};
person.Person = function (data) {
    this.firstName = m.prop(data.firstName);
    this.lastName = m.prop(data.lastName);
    this.fullName = this.firstName + this.lastName;
}

person.PersonList = Array;