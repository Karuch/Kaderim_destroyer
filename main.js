const { app, BrowserWindow, Tray, Menu } = require('electron');

let mainWindow;
let tray = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    icon: './icon.png',
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html').then(() => {
    mainWindow.webContents.send('refresh-divs'); // Send the initial refresh message
  });
  mainWindow.setMenuBarVisibility(false);

  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide();
    }
    return false;
  });

  // Add 'show' event listener to call refreshDivs
  mainWindow.on('show', refreshDivs);
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
    if (minutes === 56 && mainWindow) { // Adjust the minute as needed
      mainWindow.show();
    }
  }, 10000); // Check every 10 seconds
}

function refreshDivs() {
  if (mainWindow) {
    console.log("Refreshing divs..."); // Log for debugging
    mainWindow.webContents.send('refresh-divs');
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
