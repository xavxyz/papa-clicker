var app       = require('app');
var browser   = require('browser-window');
var electrify = require('electrify')(__dirname);

var window    = null;
var splash = null; // splash variable

app.on('ready', function() {
  splash = new browser({ // starts splash window
    width: 1200, height: 900,
    'node-integration': false // node integration must to be off
  });

  splash.loadURL('./splash.html');

  // electrify start
  electrify.start(function(meteor_root_url) {

    // open up meteor root url
    splash.loadURL(meteor_root_url);
  });
});


app.on('window-all-closed', function() {
  app.quit();
});


app.on('will-quit', function terminate_and_quit(event) {
  
  // if electrify is up, cancel exiting with `preventDefault`,
  // so we can terminate electrify gracefully without leaving child
  // processes hanging in background
  if(electrify.isup() && event) {

    // holds electron termination
    event.preventDefault();

    // gracefully stops electrify 
    electrify.stop(function(){

      // and then finally quit app
      app.quit();
    });
  }
});

// 
// =============================================================================
// 
// the methods bellow can be called seamlessly from your Meteor's
// client and server code, using:
// 
//    Electrify.call('methodname', [..args..], callback);
// 
// ATENTION:
//    From meteor, you can only call these methods after electrify is fully
//    started, use the Electrify.startup() convenience method for this
// 
// 
// Electrify.startup(function(){
//   Electrify.call(...);
// });
// 
// =============================================================================
// 
// electrify.methods({
//   'method.name': function(name, done) {
//     // do things... and call done(err, arg1, ..., argN)
//     done(null);
//   }
// });
// 
