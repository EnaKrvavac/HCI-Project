$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({pageNotFound : 'error_404'}); // initialize


  app.route({
    view: 'home',
    load: 'index.html'
  });

  app.route({
    view: 'schedule',
    load: 'schedule.html'
  });

  app.route({
    view: 'contact',
    load: 'contact.html'
  });

  app.route({
    view: 'about',
    load: 'about.html'

  });




    // run app
    app.run();

  });
