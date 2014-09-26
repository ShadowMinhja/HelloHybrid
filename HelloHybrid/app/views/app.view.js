//app.view.js
app.view = function (ctrl) {
    return [
		ctrl.pages().map(function (page) {
		    return m("div", [
                m("a", { href: page.url }, page.title),
                m("br")
		    ])		        
		}),
		m("button", { style: "border:thin solid black;", onclick: ctrl.rotate }, "Rotate links")
    ];
};

//************************//
//VIEWS
//************************//
todo.view = function (ctrl) {
    return m('div', [
      m('form', { onsubmit: function (e) { e.preventDefault(); } }, [
        m('input', {
            onchange: m.withAttr('value', ctrl.description),
            value: ctrl.description()
        }),
        m('button', {
            onclick: ctrl.add
        }, 'Add')
      ]),
      m('ul', [
        ctrl.list.map(function (task, index) {
            return m('li', [
              m('input[type=checkbox]', {
                  id: 'task_' + index,
                  onclick: m.withAttr('checked', task.done),
                  checked: task.done()
              }),
              m('label', {
                  for: 'task_' + index,
                  style: {
                      textDecoration: task.done() ? 'line-through' : 'none',
                      color: task.done() ? '#999' : '#000'
                  }
              }, task.description())
            ])
        })
      ])
    ])
};

person.view = function (ctrl) {
    return m('div', [
      m('form', { onsubmit: function (e) { e.preventDefault(); } }, [
        m('input', {
            onchange: m.withAttr('value', ctrl.firstName),
            value: ctrl.firstName()
        }),
        m('input', {
            onchange: m.withAttr('value', ctrl.lastName),
            value: ctrl.lastName()
        })
      ]),
      m('label', {}, ctrl.firstName()),
      m('br'),
      m('label', {}, ctrl.lastName()),
      m('br'),
      m('label', {}, ctrl.fullName()),
      m('ul', [
        ctrl.list.map(function (person, index) {
            return m('li', [
              m('input[type=checkbox]', {
                  id: 'task_' + index,
                  onclick: m.withAttr('checked', person.lastName),
                  checked: person.lastName()
              }),
              m('label', {
                  for: 'task_' + index,
                  style: {
                      textDecoration: person.lastName() ? 'line-through' : 'none',
                      color: person.lastName() ? '#999' : '#000'
                  }
              }, person.firstName() + ' ' + person.lastName())
            ])
        })
      ])
    ])
};

//person.view = function (ctrl) {
//    ctrl.firstName("1");
//    ctrl.lastName("1");
//    ctrl.list.push(new person.Person(
//        { firstName: "Minh", lastName: "Nguyen" }
//    ));
    
//    return ctrl.list().map(function (person, index) {
//        return m("p", [
//            m("strong", { id: 'fName' }, person.firstName),
//        ])
//    });
//};