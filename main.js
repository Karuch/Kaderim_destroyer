const { app, BrowserWindow, Tray, Menu } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    icon: './icon.png',
    show: false // Initially, don't show the window
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenuBarVisibility(false);
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
    if (minutes === 29 && mainWindow) {
      mainWindow.show();
    }
  }, 10000); // Check every 10 seconds
}

app.whenReady().then(() => {
  createWindow();
  createTray();
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

let tray = null;

function createTray() {
  tray = new Tray('./icon.png'); // Path to your icon image

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: function () {
        mainWindow.show();
      }
    },
    {
      label: 'Quit',
      click: function () {
        app.isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setToolTip('פותח צירים אולטימטיבי');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });
}
