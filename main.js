const { app, BrowserWindow } = require('electron');
const moment = require('moment/moment');


moment().format('MMMM Do YYYY, h:mm:ss a')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    frame: false // This removes the native title bar
  });

  // Load the index.html of the app.
  mainWindow.loadFile('index.html');

  // ... the rest of your window creation code.
}

app.whenReady().then(createWindow);