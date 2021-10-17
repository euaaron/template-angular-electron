import { BrowserWindow, IpcMain, ipcMain, Screen, Size } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { environment } from '../src/environments/environment';
import { IWindowOptions } from './IWindowOptions';

export class Window {
  public windowOptions: IWindowOptions;
  public pathIndex = environment.pathIndex;
  public main: BrowserWindow;
  private screen: Screen;
  private display: Size;
  private ipc: IpcMain;

  constructor() {
    this.screen = require('electron').screen;
    this.display = this.screen.getPrimaryDisplay().workAreaSize;
    this.windowOptions = this.setWindowOptions();
    this.main = this.setMain();
    this.ipc = ipcMain;
    this.onInit();
  }

  setWindowOptions(): IWindowOptions {
    const options: IWindowOptions = {
      transparent: true,
      titleBarStyle: 'hidden',
      frame: false,
      size: {
        width: this.display.width * 0.4,
        height: this.display.height * 0.8,
      },
      position: {
        x: 0,
        y: 0,
      },
    };

    if (process.platform === 'win32') {
      options.transparent = false;
      options.titleBarStyle = 'hidden';
      options.frame = true;
    }

    if (process.platform === 'darwin') {
      options.transparent = false;
      options.titleBarStyle = 'hiddenInset';
      options.frame = true;
    }
    return options;
  }

  // Create the app Window.
  setMain() {
    return new BrowserWindow({
      titleBarStyle: this.windowOptions.titleBarStyle,
      transparent: this.windowOptions.transparent,
      height: this.windowOptions.size.height,
      width: this.windowOptions.size.width,
      frame: this.windowOptions.frame,
      backgroundColor: '#282a36',
      roundedCorners: true,
      minHeight: 240,
      minWidth: 360,
      webPreferences: {
        webviewTag: true,
        webSecurity: true,
        nodeIntegration: true,
        contextIsolation: false,
        allowRunningInsecureContent: false,
      },
    });
  }

  // Make links with target='_blank' open on an external browser application.
  redirectToOutside() {
    this.main.webContents.on('new-window', function (event, url) {
      event.preventDefault();
      require('electron').shell.openExternal(url);
    });
  }

  // Fills the app with Angular code
  fillContent() {
    if (!environment.production) {
      this.main.loadURL('http://localhost:4200').catch((err) => {
        console.log(err);
        this.main.close();
      });
    } else {
      this.main.loadURL(
        url.format({
          pathname: path.join(__dirname, this.pathIndex),
          protocol: 'file:',
          slashes: true,
        })
      );
    }
  }

  onInit() {
    // Centralizes the screen
    this.main.center();
    this.fillContent();
    this.listenActions();
    this.redirectToOutside();
  }

  // Listen to user actions like close, maximize, etc.
  listenActions() {
    this.ipc.on('close', () => {
      this.main.close();
    });

    this.ipc.on('minimize', () => {
      this.main.minimize();
    });

    this.ipc.on('maximize', () => {
      this.windowOptions.position.x = this.main.getPosition()[0];
      this.windowOptions.position.y = this.main.getPosition()[1];
      this.windowOptions.size.height = this.main.getSize()[1];
      this.windowOptions.size.width = this.main.getSize()[0];
      this.main.maximize();
    });

    this.ipc.on('restore', () => {
      this.main.restore();
      this.main.setSize(
        this.windowOptions.size.width,
        this.windowOptions.size.height,
        true
      );
      this.main.setPosition(
        this.windowOptions.position.x,
        this.windowOptions.position.y,
        true
      );
    });

    // Event when the window is closed.
    this.main.on('closed', () => {
      this.main.destroy();
    });
  }
}
