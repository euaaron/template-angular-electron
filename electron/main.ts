import { app } from 'electron';
import { Window } from './window';

let win: any;

try {
  // Create window on electron initialization
  app.on('ready', () => {
    win = new Window()
  });

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
      win = new Window();
    }
  });
} catch (e) {
  console.log(e);
}
