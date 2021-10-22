import { BrowserWindow, ipcMain } from 'electron';
import { WindowEventsEnum } from './enum';

class WindowController {
  constructor(private window: BrowserWindow) {
    this.listenToCloseApp();
    this.listenToHideApp();
    this.listenToMaximize();
  }

  listenToCloseApp() {
    ipcMain.on(WindowEventsEnum.CLOSE_APP, () => {
      this.window.close();
    });
  }

  listenToHideApp() {
    ipcMain.on(WindowEventsEnum.TOGGLE_HIDED, () => {
      this.window.minimize();
    });
  }

  listenToMaximize() {
    ipcMain.on(WindowEventsEnum.TOGGLE_MAXIMIZE, () => {
      if (this.window.isMaximized()) {
        this.window.unmaximize();
      } else {
        this.window.maximize();
      }
    });
  }
}

export default WindowController;
