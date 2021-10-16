import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { environment } from '../src/environments/environment';

const ipc = ipcMain;
let win: BrowserWindow;

function createWindow() {
  const { screen } = require('electron');
  const display = screen.getPrimaryDisplay().workAreaSize;
  const pathIndex = '../index.html';

  const windowPos = {
    x: 0,
    y: 0,
    width: display.width * 0.4,
    height: display.height * 0.8,
  };

  // Create the browser window.
  win = new BrowserWindow({
    width: windowPos.width,
    height: windowPos.height,
    minWidth: 360,
    minHeight: 240,
    transparent: false,
    roundedCorners: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      allowRunningInsecureContent: false,
      webSecurity: true,
      contextIsolation: false,
    },
  });

  win.center();

  win.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });

  if (!environment.production) {
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, pathIndex),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  ipc.on('close', () => {
    win.close();
  });

  ipc.on('minimize', () => {
    win.minimize();
  });

  ipc.on('maximize', () => {
    windowPos.x = win.getPosition()[0];
    windowPos.y = win.getPosition()[1];
    windowPos.width = win.getSize()[0];
    windowPos.height = win.getSize()[1];
    win.maximize();
  });

  ipc.on('restore', () => {
    win.restore();
    win.setSize(windowPos.width, windowPos.height, true);
    win.setPosition(windowPos.x, windowPos.y, true);
  });

  // Event when the window is closed.
  win.on('closed', () => {
    win.destroy();
  });
}

try {
  // Create window on electron initialization
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS specific close process
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // macOS specific close process
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  console.log(e);
}
