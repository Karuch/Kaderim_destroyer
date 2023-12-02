const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    show: false // Initially, don't show the window
  });

  mainWindow.loadFile('index.html');

  // Event handler for the close event
  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide(); // Hide the window
    }
    return false;
  });

  // ... other code ...
}

function checkTimeAndShowWindow() {
  setInterval(() => {
    const now = new Date();
    const minutes = now.getMinutes();
    if (minutes != 50 && mainWindow) {
      mainWindow.show();
    }
  }, 60); // Check every 10 seconds
}

app.whenReady().then(() => {
  createWindow();
  checkTimeAndShowWindow();
});

app.on('before-quit', () => {
  app.isQuitting = true;
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
