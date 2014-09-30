///<reference path="mithril.d.ts" />
class Student {
    fullname: string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

/////<reference path="../../scripts/mithril.d.ts" />
//var Login = (function () {
//    function Login(data) {
//        this.data = data;
//        this.userName = m.prop(data.userName);
//        this.passWord = m.prop(data.passWord);
//        this.isLoggedIn = m.prop(data.isLoggedIn);
//    }
//    return Login;
//})();