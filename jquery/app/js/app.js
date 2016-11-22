/*global jQuery, Handlebars, Router */
jQuery(function ($) {
  'use strict';

  Handlebars.registerHelper('eq', function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
  });

  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  var util = {
    uuid: function () {
      /*jshint bitwise:false */
      var i, random;
      var uuid = '';

      for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
      }

      return uuid;
    },
    pluralize: function (count, word) {
      return count === 1 ? word : word + 's';
    },
    store: function (namespace, data) {
      if (arguments.length > 1) {
        if (App.isUser) {
          firebase.database().ref('todos/' + namespace).set({data: JSON.stringify(data)});
        }
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        var store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
      }
    }
  };

  var App = {
    init: function () {
      this.prefix = 'todos-jquery';
      this.isUser = false;
      this.todos = util.store(this.prefix);
      this.todoTemplate = Handlebars.compile($('#todo-template').html());
      this.footerTemplate = Handlebars.compile($('#footer-template').html());
      this.bindEvents();
      this.loginForm = $('#loginForm');
      this.todoapp = $('#todoapp');
      this.loginBtn = $('#loginBtn');
      this.logoutBtn = $('#logoutBtn');
      this.email = $('#email');
      this.password = $('#password');
      this.errorField = $('#error');

      new Router({
        '/:filter': function (filter) {
          this.filter = filter;
          this.render();
        }.bind(this)
      }).init('/all');
    },
    bindEvents: function () {
      $('#new-todo').on('keyup', this.create.bind(this));
      $('#toggle-all').on('change', this.toggleAll.bind(this));
      $('#footer').on('click', '#clear-completed', this.destroyCompleted.bind(this));
      $('#todo-list')
        .on('change', '.toggle', this.toggle.bind(this))
        .on('dblclick', 'label', this.edit.bind(this))
        .on('keyup', '.edit', this.editKeyup.bind(this))
        .on('focusout', '.edit', this.update.bind(this))
        .on('click', '.destroy', this.destroy.bind(this));
      $('#loginBtn, #cancelBtn').on('click', this.formToggle.bind(this));
      $('#logoutBtn').on('click', this.signOut.bind(this));
      $('#signInBtn').on('click', this.signIn.bind(this));
      $('#signUpBtn').on('click', this.signUp.bind(this));
    },
    render: function (notStore) {
      var todos = this.getFilteredTodos();
      $('#todo-list').html(this.todoTemplate(todos));
      $('#main').toggle(todos.length > 0);
      $('#toggle-all').prop('checked', this.getActiveTodos().length === 0);
      this.renderFooter();
      $('#new-todo').focus();
      if (!notStore) {
        util.store(this.prefix, this.todos);
      }
    },
    renderFooter: function () {
      var todoCount = this.todos.length;
      var activeTodoCount = this.getActiveTodos().length;
      var template = this.footerTemplate({
        activeTodoCount: activeTodoCount,
        activeTodoWord: util.pluralize(activeTodoCount, 'item'),
        completedTodos: todoCount - activeTodoCount,
        filter: this.filter
      });

      $('#footer').toggle(todoCount > 0).html(template);
    },
    toggleAll: function (e) {
      var isChecked = $(e.target).prop('checked');

      this.todos.forEach(function (todo) {
        todo.completed = isChecked;
      });

      this.render();
    },
    getActiveTodos: function () {
      return this.todos.filter(function (todo) {
        return !todo.completed;
      });
    },
    getCompletedTodos: function () {
      return this.todos.filter(function (todo) {
        return todo.completed;
      });
    },
    getFilteredTodos: function () {
      if (this.filter === 'active') {
        return this.getActiveTodos();
      }

      if (this.filter === 'completed') {
        return this.getCompletedTodos();
      }

      return this.todos;
    },
    destroyCompleted: function () {
      this.todos = this.getActiveTodos();
      this.filter = 'all';
      this.render();
    },
    // accepts an element from inside the `.item` div and
    // returns the corresponding index in the `todos` array
    indexFromEl: function (el) {
      var id = $(el).closest('li').data('id');
      var todos = this.todos;
      var i = todos.length;

      while (i--) {
        if (todos[i].id === id) {
          return i;
        }
      }
    },
    create: function (e) {
      var $input = $(e.target);
      var val = $input.val().trim();

      if (e.which !== ENTER_KEY || !val) {
        return;
      }

      this.todos.push({
        id: util.uuid(),
        title: val,
        completed: false
      });

      $input.val('');

      this.render();
    },
    toggle: function (e) {
      var i = this.indexFromEl(e.target);
      this.todos[i].completed = !this.todos[i].completed;
      this.render();
    },
    edit: function (e) {
      var $input = $(e.target).closest('li').addClass('editing').find('.edit');
      $input.val($input.val()).focus();
    },
    editKeyup: function (e) {
      if (e.which === ENTER_KEY) {
        e.target.blur();
      }

      if (e.which === ESCAPE_KEY) {
        $(e.target).data('abort', true).blur();
      }
    },
    update: function (e) {
      var el = e.target;
      var $el = $(el);
      var val = $el.val().trim();

      if (!val) {
        this.destroy(e);
        return;
      }

      if ($el.data('abort')) {
        $el.data('abort', false);
      } else {
        this.todos[this.indexFromEl(el)].title = val;
      }

      this.render();
    },
    destroy: function (e) {
      this.todos.splice(this.indexFromEl(e.target), 1);
      this.render();
    },
    formToggle: function () {
      this.showError('');
      this.loginForm.toggle();
      this.todoapp.toggle();
      this.toggleBtn();

    },

    switchLoginBtn: function () {
      this.loginBtn[(!this.isUser) ? 'show' : 'hide']();
      this.logoutBtn[(this.isUser) ? 'show' : 'hide']();

    },
    signIn: function () {
      // SignIn a user
      var email = this.email.val() || '';
      var password = this.password.val() || '';
      var self = this;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
          // reload the page when user signed in successfully
          window.location.reload();
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code || 'Oops';
          var errorMessage = error.message || 'We got an error!';
          console.log(errorCode + ': ' + errorMessage);
          self.showError(errorMessage);
        });

    },
    signUp: function () {
      var email = this.email.val() || '';
      var password = this.password.val() || '';
      var self = this;

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
          // reload the page when user signed in successfully
          window.location.reload();
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code || 'Oops';
          var errorMessage = error.message || 'We got an error!';
          console.log(errorCode + ': ' + errorMessage);
          self.showError(errorMessage);
        });

    },
    signOut: function() {
      var self = this;

      firebase.auth().signOut().then(function() {
        // Sign-out successful
        window.location.reload();
        console.log('logged out');
      }, function(error) {
        // Handle Errors here.
        var errorCode = error.code || 'Oops';
        var errorMessage = error.message || 'We got an error!';
        console.log(errorCode + ': ' + errorMessage);
        self.formToggle();
        self.showError(errorMessage);
      });
    },
    showError: function (text) {
      var text = text || '';
      this.errorField.text(text);

    },
    reloadDB: function (prefix) {
      this.prefix = 'todos-jquery' + ((prefix) ? '-' + prefix : '');
      var self = this;

      if (prefix) {
        var data = firebase.database().ref('todos/' + this.prefix).once('value').then(function(snapshot) {
          if (snapshot.val()) {
            util.store(self.prefix, self.todos = JSON.parse(snapshot.val().data));
          } else {
            util.store(self.prefix, self.todos = []);
          }
          self.render(true);
        });
      }
    }
  };

  function initFirebase() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var email = user.email;
        var uid = user.uid;
        user.getToken().then(function(accessToken) {
          App.isUser = true;
          App.reloadDB(uid); // load data from DB
          App.switchLoginBtn();
        });
      } else {
        // User is signed out.
        // localStorage is used
        App.isUser = false;
        App.switchLoginBtn();
      }
    }, function(error) {
      console.log(error);
    });
  };

  App.init();
  window.addEventListener('load', function() {
    initFirebase();
  });
});
