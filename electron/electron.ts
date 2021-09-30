import { app, BrowserWindow, ipcMain, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { environment } from '../src/environments/environment';

const ipc = ipcMain;
let win: BrowserWindow;

function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;
  // Set default window
  const windowPos = {
    x: 0,
    y: 0,
    width: size.width * 0.5,
    height: size.height * 0.8,
  };
  let pathIndex = '../index.html';
  let { x, y, width, height } = windowPos;

  // Create the browser window.
  win = new BrowserWindow({
    x,
    y,
    width,
    height,
    minWidth: size.width * 0.25,
    minHeight: size.height * 0.50,
    frame: false,
    transparent: true,
    roundedCorners: true,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      allowRunningInsecureContent: false,
      webSecurity: true,
      contextIsolation: false,
    },
  });

  win.center();

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
    if (process.platform === 'win32') {
      win.setSize(windowPos.width, windowPos.height, true);
      win.setPosition(windowPos.x, windowPos.y, true);
    } else {
      win.restore();
    }
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
