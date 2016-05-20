/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'angular2-websocket': 'vendor/angular2-websocket',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: {
    '@angular/core': { main: 'index' },
    '@angular/common': { main: 'index' },
    '@angular/compiler': { main: 'index' },
    '@angular/http': { main: 'index' },
    '@angular/router': { main: 'index' },
    '@angular/platform-browser': { main: 'index' },
    '@angular/platform-browser-dynamic': { main: 'index' },

    // Thirdparty barrels.
    'rxjs': { main: 'Rx' },
    'angular2-websocket': { main: 'angular2-websocket' },

    // App specific barrels.
    'app': { main: 'index' },
    'app/shared': { main: 'index' },
  }
});

// Apply the user's configuration.
System.config({ map, packages });
