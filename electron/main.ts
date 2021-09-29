import * as dotenv from 'dotenv';
import { app, BrowserWindow, screen } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

dotenv.config();

let win: BrowserWindow;

function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;
  let pathIndex = "./index.html";

  if (fs.existsSync(path.join(__dirname, "../index.html"))) {
    // Path when running electron in local folder
    pathIndex = "../index.html";
  }

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    minWidth: size.width * 0.25,
    minHeight: size.height * 0.25,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: false,
      webSecurity: true,
      contextIsolation: false,
    },
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, pathIndex),
      protocol: "file:",
      slashes: true,
    })
  );

  const isRunningInDevMode = Boolean(process.env.DEV) || false;

  if (isRunningInDevMode) {
    win.webContents.openDevTools();
  }

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
