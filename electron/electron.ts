import * as dotenv from 'dotenv';
import { app, BrowserWindow, ipcMain, screen } from 'electron';
import 'electron-reload';
import * as path from 'path';
import * as url from 'url';
import { environment } from '../src/environments/environment';

dotenv.config();

let win: BrowserWindow;
const ipc = ipcMain;

function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;
  let pathIndex = "../index.html";

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    minWidth: size.width * 0.25,
    minHeight: size.height * 0.25,
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

  if(!environment.production) {
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, pathIndex),
        protocol: "file:",
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
    win.maximize();
  });

  ipc.on('restore', () => {
    win.restore();
  });

  // Event when the window is closed.
  win.on("closed", function () {
    win.destroy();
  });
}

try {
  // Create window on electron initialization
  app.on("ready", createWindow);

  // Quit when all windows are closed.
  app.on("window-all-closed", function () {
    // On macOS specific close process
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", function () {
    // macOS specific close process
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  console.log(e);
}
