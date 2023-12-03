const { app, BrowserWindow, Tray, Menu } = require('electron');

let mainWindow;
let tray = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    icon: './icon.png',
    show: false // Initially, don't show the window
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenuBarVisibility(false);

  // Refresh the window when it's shown
  mainWindow.on('show', refreshWindow);

  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide();
    }
    return false;
  });

  // ... other code ...
}

function createTray() {
  tray = new Tray('./icon.png');

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

function checkTimeAndShowWindow() {
  setInterval(() => {
    const now = new Date();
    const minutes = now.getMinutes();
    if (minutes === 31 && mainWindow) {
      mainWindow.show();
    }
  }, 10000); // Check every 10 seconds
}

function refreshWindow() {
  if (mainWindow) {
    mainWindow.reload();
  }
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
