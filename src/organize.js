/*
Organize.js
Created 3/2/16 at 2:12pm.
Copyright © 2016 TSWDCode.
*/

(function(global) {
  // `window` is passed in as `global`.
  // An anonymous function is used to avoid writing to global variables.
  
  /*
  The view controls the UI, and processes input.
  */
  var View = function(app) {
    this.app = app || new App();
    
    this.associate = function(app) {
      this.app = app;
    }
  };
  
  /*
  The app controls the main functions of the program - web requests, logic, etc.
  */
  var App = function(view) {
    this.view = view || new View();
    
    this.associate = function(view) {
      this.view = view;
    }
  };
  
  var Organize = function(app, view) {
    // Create new apps/views if they are not passed in.
    app = app || new App(view);
    view = view || new View(app);
    
    // Create public access to the app/view
    this.app  = app;
    this.view = view;
    
    // Associate the view with the app and vice-versa
    view.associate(app);
    app.associate(view);
  };
  
  // Explicitly declare a global, `Organize()`, for use by the main JS
  global.Organize = function() {
    Organize.apply(this, arguments);
  };
})(window);
